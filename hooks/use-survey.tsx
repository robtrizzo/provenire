"use client";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import type { Survey } from "@/types/survey";

export function useSurvey(surveyId: string, defaultSurvey: Survey) {
  const session = useSession();
  const [isDirty, setIsDirty] = useState(false);

  const { data, isPending } = useQuery({
    queryKey: ["survey", surveyId, session.data?.user.id],
    queryFn: async () => {
      const response = await fetch(
        `/api/surveys/${surveyId}/user/${session.data?.user.id}`
      );
      return response.json();
    },
    enabled: !!session.data?.user.id,
  });

  const { mutateAsync: submitSurvey, isPending: isSubmitting } = useMutation({
    mutationFn: async (survey: Survey) => {
      await fetch(`/api/surveys/${surveyId}`, {
        method: "POST",
        body: JSON.stringify(survey),
      });
    },
    onError: () => {
      console.error("Error submitting survey");
    },
  });

  const { mutateAsync: updateSurvey, isPending: isUpdating } = useMutation({
    mutationFn: async (survey: Survey) => {
      if (!session.data?.user.id) {
        throw new Error("User ID is required to update survey");
      }
      await fetch(`/api/surveys/${surveyId}/${session.data?.user.id}`, {
        method: "PUT",
        body: JSON.stringify(survey),
      });
    },
    onError: (e) => {
      console.error("Error submitting survey: ", e);
    },
  });

  useEffect(() => {
    console.log("isDirty", isDirty);
    if (!isDirty) return;

    // Handle browser reload/close
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      return (e.returnValue = "");
    };

    // Handle link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.href && !link.href.startsWith("javascript:")) {
        const currentOrigin = window.location.origin;
        const linkUrl = new URL(link.href, currentOrigin);

        // Only intercept same-origin navigation
        if (
          linkUrl.origin === currentOrigin &&
          linkUrl.pathname !== window.location.pathname
        ) {
          if (
            !window.confirm(
              "You have unsaved changes. Are you sure you want to leave?"
            )
          ) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("click", handleClick, true); // Use capture phase

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("click", handleClick, true);
    };
  }, [isDirty]);

  const survey = data && !data.error ? data.survey : defaultSurvey;

  const handleMarkDirty = () => {
    setIsDirty(true);
  };

  const handleSubmit = async (survey: Survey) => {
    if (survey.submitted) {
      await updateSurvey(survey);
    } else {
      survey.submitted = true;
      await submitSurvey(survey);
    }
    setIsDirty(false);
  };

  return {
    survey,
    isPending,
    isLoading: isPending,
    isSubmitting,
    isUpdating,
    isDirty,
    handleMarkDirty,
    handleSubmit,
    session,
  };
}
