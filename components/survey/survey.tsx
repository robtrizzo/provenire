"use client";
import { useSurvey } from "@/hooks/use-survey";
import Category from "./category";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";
import type { Survey } from "@/types/survey";

export default function Survey({
  survey,
  endpoint,
}: {
  survey: Survey;
  endpoint: string;
}) {
  const {
    session,
    isSubmitting,
    isUpdating,
    handleMarkDirty,
    handleSubmit: submitSurvey,
  } = useSurvey(endpoint, survey);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const answers: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("q-")) {
        const questionId = key.slice(2);
        answers[questionId] = value as string;
      }
    }

    // build the survey object
    const submissionSurvey: Survey = survey;
    for (const category of submissionSurvey.categories) {
      for (const question of category.questions) {
        const answer = answers[question.id.toString()];
        if (answer) {
          question.answer = answer;
        }
      }
    }
    submissionSurvey.user = session.data?.user.id || "";
    submissionSurvey.submittedAt = new Date().toISOString();

    await submitSurvey(survey);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      {survey.categories.map((category) => (
        <Category
          key={category.title}
          category={category}
          handleMarkDirty={handleMarkDirty}
        />
      ))}
      <div className="flex flex-col gap-2 mt-4">
        {survey.submittedAt && (
          <span className="text-muted-foreground">
            Survey submitted: {survey.submittedAt}.{" "}
            <i className="text-fuchsia-500">Thank you!</i>
          </span>
        )}

        <div>
          <Button type="submit" disabled={isSubmitting || isUpdating}>
            {survey.submitted ? "Update" : "Submit"} <Sparkles />
          </Button>
        </div>
      </div>
    </form>
  );
}
