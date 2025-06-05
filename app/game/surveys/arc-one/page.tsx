"use client";
import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  TypographyH1,
  TypographyH2,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { Category, Question, Survey } from "@/types/survey";
import { cn } from "@/lib/utils";
import { arcOneSurvey } from "@/lib/surveys";

export default function Page() {
  const session = useSession();
  if (!session) {
    redirect("/signin");
  }

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Surveys", href: "#" },
          { name: "Arc One", href: "#" },
        ]}
      />
      <TypographyH1>Arc One Player Survey</TypographyH1>
      <TypographyP>
        Hey there gamers! Once again I have to thank you for a fantastic 36
        sessions of games. Given the average session time, that&apos;s probably
        around <b>140</b> hours of gaming! Anyway, this isn&apos;t about stats.
        This is about you!
      </TypographyP>
      <TypographyP>
        Our experiences (me the GM and you the player) are vastly different. And
        I can&apos;t understand lots of things from your perspective, so I want
        to hear from you!
      </TypographyP>
      <TypographyP>
        This is a very thorough survey and it will be broken down into sections.
        This is absolutely <i>NOT</i> required, but if you feel like helping me
        make the game better for you, thanks!
      </TypographyP>
      <TypographyP>
        When it comes to the game-system, keep in mind that your feedback will
        be applied in Arc 3. Arc 2 has already been heavily in the works and
        it&apos;s too late to make big changes. But if the opportunity arises,
        of course I&apos;ll adapt it to suit your preferences!
      </TypographyP>
      <TypographyP>
        Also worth keeping in mind that these are <i>NOT</i> anonymous - for the
        sake of only one survey response per player.
      </TypographyP>
      <Separator className="my-4" />
      <TypographyH4>Quick links</TypographyH4>
      <div className="flex flex-col gap-1 ml-4">
        <Link href="#overall">
          <u className="text-red-500">Overall</u>
        </Link>
        <Link href="#scheduling">
          <u className="text-red-500">Scheduling</u>
        </Link>
        <Link href="#narrative">
          <u className="text-red-500">Narrative</u>
        </Link>
        <Link href="#character-options">
          <u className="text-red-500">Character Options</u>
        </Link>
        <Link href="#mechanics">
          <u className="text-red-500">Mechanics</u>
        </Link>
        <Link href="#structure">
          <u className="text-red-500">Structure</u>
        </Link>
        <Link href="#character-sheet">
          <u className="text-red-500">Character Sheet</u>
        </Link>
        <Link href="#website">
          <u className="text-red-500">Website</u>
        </Link>
      </div>
      <Separator className="my-4" />
      <SurveyWrapper />
    </>
  );
}

function SurveyWrapper() {
  const session = useSession();
  const { data, isPending } = useQuery({
    queryKey: ["survey", "arc-one", session.data?.user.id],
    queryFn: async () => {
      const response = await fetch(
        `/api/surveys/arc-one/user/${session.data?.user.id}`
      );
      return response.json();
    },
    enabled: !!session.data?.user.id,
  });

  if (isPending) {
    return (
      <TypographyP>
        Checking to see if you&apos;ve already submitted a response...
      </TypographyP>
    );
  }
  let survey = arcOneSurvey;
  if (data && !data.error) {
    survey = data.survey;
  }
  return <Survey survey={survey} />;
}

function Survey({ survey }: { survey: Survey }) {
  const session = useSession();
  const { mutateAsync: submitSurvey, isPending } = useMutation({
    mutationFn: async (survey: Survey) => {
      await fetch(`/api/surveys/arc-one`, {
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
      await fetch(`/api/surveys/arc-one/${session.data?.user.id}`, {
        method: "PUT",
        body: JSON.stringify(survey),
      });
    },
    onError: (e) => {
      console.error("Error submitting survey: ", e);
    },
  });

  const [isDirty, setIsDirty] = useState(false);
  const handleMarkDirty = () => {
    setIsDirty(true);
  };
  useEffect(() => {
    if (!isDirty) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue =
        "You have unsaved changes. Leaving will reset the form. Are you sure?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

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
    const survey: Survey = arcOneSurvey;
    for (const category of survey.categories) {
      for (const question of category.questions) {
        // try to find an answer corresponding to the question.id
        const answer = answers[question.id.toString()];
        if (answer) {
          question.answer = answer;
        }
      }
    }
    survey.user = session.data?.user.id || "";
    survey.submittedAt = new Date().toISOString();

    // submit the survey
    if (survey.submitted) {
      await updateSurvey(survey);
    } else {
      survey.submitted = true;
      await submitSurvey(survey);
    }
    setIsDirty(false);
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
          <Button type="submit" disabled={isPending || isUpdating}>
            {survey.submitted ? "Update" : "Submit"} <Sparkles />
          </Button>
        </div>
      </div>
    </form>
  );
}

function Category({
  category,
  handleMarkDirty,
}: {
  category: Category;
  handleMarkDirty: () => void;
}) {
  return (
    <>
      <TypographyH2 id={category.title.toLowerCase().replace(/\s+/g, "-")}>
        {category.title}
      </TypographyH2>
      {category.questions.map((question) => {
        switch (question.type) {
          case "text":
            return (
              <TextQuestion
                key={question.id}
                question={question}
                handleMarkDirty={handleMarkDirty}
              />
            );
          case "multiple-choice":
            return (
              <MultipleChoiceQuestion
                key={question.id}
                question={question}
                handleMarkDirty={handleMarkDirty}
              />
            );
          default:
            return <div key={question.id}>Unknown question type</div>;
        }
      })}
    </>
  );
}

function TextQuestion({
  question,
  handleMarkDirty,
}: {
  question: Question;
  handleMarkDirty: () => void;
}) {
  return (
    <Card>
      <CardHeader>
        <TypographyP>{question.title}</TypographyP>
      </CardHeader>
      <CardContent>
        <Textarea
          name={`q-${question.id}`}
          placeholder="Type your feedback here."
          defaultValue={question.answer || ""}
          onChange={handleMarkDirty}
        />
      </CardContent>
    </Card>
  );
}

function MultipleChoiceQuestion({
  question,
  handleMarkDirty,
}: {
  question: Question;
  handleMarkDirty: () => void;
}) {
  return (
    <Card>
      <CardHeader>
        <TypographyP>{question.title}</TypographyP>
      </CardHeader>
      <CardContent>
        <RadioGroup
          name={`q-${question.id}`}
          defaultValue={question.answer || ""}
          onChange={handleMarkDirty}
        >
          {question.options?.map((option, index) => (
            <div className="flex items-center gap-3" id="r1" key={index}>
              <RadioGroupItem value={option.value} />
              <Label htmlFor="r1">
                <span className={cn(option.color && option.color)}>
                  {option.text}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
