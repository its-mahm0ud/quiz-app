
export interface IQuizQuestion {
  type: string;
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
export interface IQuizResponse {
  response_code: number;
  results: IQuizQuestion[];
}