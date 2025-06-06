export type Survey = {
  categories: Category[];
  title: string;
  arc: string;
  user?: string; // User Id of the person filling out the survey
  submittedAt?: string; // ISO date string when the survey was submitted
  submitted?: boolean; // Whether the survey has been submitted
  id?: string; // Optional ID for the survey, useful for updates
};

export type Category = {
  title: string;
  questions: Question[] | AggregatedQuestionResponse[];
};

export type Question = {
  id: number;
  title: string;
  type: "text" | "multiple-choice";
  options?: Option[]; // Only for multiple-choice questions
  required?: boolean; // Whether the question must be answered
  answer?: string;
};

export type Option = {
  text: string;
  value: string;
  color?: string;
};

export type AggregatedQuestionResponse = {
  id: number;
  title: string;
  type: "text" | "multiple-choice";
  options?: Option[]; // Only for multiple-choice questions
  required?: boolean; // Whether the question must be answered
  answer: AggregatedAnswer[];
};

export type AggregatedAnswer = {
  user: string;
  answer: string;
};
