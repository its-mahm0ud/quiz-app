import { Button, Card } from "@heroui/react";
interface CartResultOfQuizProps {
  correctAnswar: number;
  lengthOfQuestion: number;
}

export default function CartResultOfQuiz({
  correctAnswar,
  lengthOfQuestion,
}: CartResultOfQuizProps) {
  return (
    <>
        <Card className="text-textMainColor max-w-lg mx-auto mt-10 shadow-lg bg-inherit border-1 border-blue-400 p-9">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">
            🎉 Your Result
          </h1>

          <div className="bg-white rounded-xl p-4 shadow-md mb-6">
            <p className="text-xl text-gray-700 mb-2">
              Correct Answers:{" "}
              <span className="font-bold text-green-600">{correctAnswar}</span>
            </p>
            <p className="text-xl text-gray-700">
              Total Questions:{" "}
              <span className="font-bold text-blue-600">
                {lengthOfQuestion}
              </span>
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg text-textMainColor">
              Good job! Keep practicing to improve💪
            </h2>
          </div>

          <div className="mt-6">
            <Button
              color="primary"
              variant="shadow"
              className="px-6 py-2 rounded-full"
              onPress={()=>window.location.reload()}
            >
              Try Again
            </Button>
          </div>
        </Card>
    </>
  );
}
