import { Card, Select, Button, SelectItem } from "@heroui/react";
import {  useState } from "react";
import {
  Difficulty,
  numberOfQuesstions,
} from "../../ObjectsForDetailsQuiz/ObjectsForDetailsQuiz";
import CartOfQuiz from "../CartOfQuizComponent/CartOfQuiz";
import { ResponseOfQuiz } from "../../Api/ApiServices";
import type { IQuizQuestion } from "../../Interfaces/IResponseOfQuiz";

export default function CartOfDetailsQuiz() {

  const [showQuiz, setshowQuiz] = useState(false);
  const [selectNumber, setSelectNumber] = useState<number | any>(null);
  const [selectDifficulty, setSelectDifficulty] = useState<string | null>(null);
  const [allQuestions, setAllQuestions] = useState<IQuizQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  async function handleStartQuiz() {
    setIsLoading(true);
    if (selectNumber === null || selectDifficulty === null) {
      setShowError(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return;
    } else {
      const { results } = await ResponseOfQuiz(selectNumber, selectDifficulty);
      if (results) {
        setAllQuestions(results);
        setIsLoading(false);
        setshowQuiz(true);
      } else {
        setshowQuiz(false);
        setShowError(true);
        setIsLoading(false);

        console.log("no");
      }
    }
  }
  return (
    <>
      {!showQuiz && (
        <Card className="text-textMainColor  w-1/4 mx-auto mt-10 shadow-lg bg-inherit border border-blue-400">
          <div className="p-6 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
              Your Quiz Details
            </h2>

            {/* Number of Questions */}
            <Select
              items={numberOfQuesstions}
              label="Number of Questions"
              onChange={(val) => setSelectNumber(val.target.value)}
            >
              {(item) => <SelectItem>{item.label}</SelectItem>}
            </Select>
            {/* Difficulty */}
            <Select
              items={Difficulty}
              label="Difficulty"
              onChange={(val) => setSelectDifficulty(val.target.value)}
            >
              {(item) => <SelectItem>{item.label}</SelectItem>}
            </Select>

            <Button
              isLoading={isLoading}
              onPress={handleStartQuiz}
              type="submit"
              color="primary"
              variant="shadow"
              className="mt-4"
            >
              Start Quiz
            </Button>
            {showError && (
              <span className="text-danger-400 mx-auto">
                Something went wrong
              </span>
            )}
          </div>
        </Card>
      )}
      {showQuiz && <CartOfQuiz allQuestions={allQuestions} />}
    </>
  );
}
