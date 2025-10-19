import axios from "axios";
import type { IQuizResponse } from "../Interfaces/IResponseOfQuiz";

export async function ResponseOfQuiz(
  number: any,
  difficulty: any
): Promise<IQuizResponse> {
  const response =
    await axios.get(`https://opentdb.com/api.php?amount=${number}&category=17&difficulty=${difficulty}&type=multiple
`);
  return response.data;
}
