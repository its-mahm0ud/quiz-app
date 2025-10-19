import { Button, Card, CardFooter } from "@heroui/react";
import type { IQuizQuestion } from "../../Interfaces/IResponseOfQuiz";
import { useEffect, useState } from "react";
import CartResultOfQuiz from "../CartResultOfQuiz/CartResultOfQuiz";
interface CartOfQuizProps {
  allQuestions: IQuizQuestion[];
}
export default function CartOfQuiz({ allQuestions }: CartOfQuizProps) {
  const [selectedAnswar, setSelectedAnswar] = useState("");
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [showResultOfQuiz, setShowResultOfQuiz] = useState(false);

  let [correctAnswar, setCorrectAnswar] = useState(0);
  const [allAnswars, setAllAnswars] = useState<string[]>([]);

  function handleNextQuestion() {
    currentQuestion++;
    setCurrentQuestion(currentQuestion);
  }

  function handleCorrectAnswar(answar: string) {
    setSelectedAnswar(answar);
    if (answar === allQuestions[currentQuestion].correct_answer) {
      correctAnswar++;
      setCorrectAnswar(correctAnswar);
      console.log(correctAnswar);

      console.log("yes");
    } else {
      console.log("no");
    }
  }

  useEffect(() => {
    setSelectedAnswar("");
    const answars = [
      allQuestions[currentQuestion].correct_answer,
      ...allQuestions[currentQuestion].incorrect_answers,
    ].sort(() => Math.random() - 0.5);
    setAllAnswars(answars);
  }, [currentQuestion]);

  return (
    <>
      {!showResultOfQuiz && (
        <Card className=" text-textMainColor max-w-lg mx-auto mt-10 shadow-lg bg-inherit border-1 border-blue-400">
          <h1 className="text-amber-600 mt-2">
            Question {currentQuestion + 1}
          </h1>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {allQuestions[currentQuestion].question}
            </h2>

            {/* الإجابات */}
            <div className="flex flex-col gap-3">
              {allAnswars.map((answar, index) => {
                return (
                  <Button
                    onPress={() => handleCorrectAnswar(answar)}
                    key={index}
                    variant="shadow"
                    color="primary"
                    className={`${
                      selectedAnswar
                        ? answar ===
                          allQuestions[currentQuestion].correct_answer
                          ? "bg-success-400"
                          : selectedAnswar === answar
                          ? "bg-danger-400"
                          : ""
                        : ""
                    }`}
                  >
                    {answar}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <CardFooter className="text-sm text-slate-600 p-4 flex justify-center">
            {allQuestions.length > currentQuestion + 1 && (
              <Button
                onPress={() => handleNextQuestion()}
                color="primary"
                variant="shadow"
              >
                <h3>Next Quesstion</h3>
              </Button>
            )}
            {allQuestions.length === currentQuestion + 1 && (
              <Button
                onPress={() => setShowResultOfQuiz(!showResultOfQuiz)}
                color="primary"
                variant="shadow"
              >
                <h3>Last Quesstion</h3>
              </Button>
            )}
          </CardFooter>
        </Card>
      )}
      {showResultOfQuiz && <CartResultOfQuiz correctAnswar={correctAnswar} lengthOfQuestion={allQuestions.length}/>}
    </>
  );
}
