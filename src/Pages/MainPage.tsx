import { Button } from "@heroui/react";
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent";
import { useState } from "react";
import CartOfDetailsQuiz from "../Components/CartOfDetailsQuizComponent/CartOfDetailsQuiz";


export default function MainPage() {
  const [showDetailsQuiz, setshowDetailsQuiz] = useState(false);
  return (
    <div className="main-bg w-full h-screen bg-center bg-cover">
      <NavbarComponent />
      <div className="flex w-full   justify-center items-center text-center">
        <div className="flex flex-col w-full justify-center gap-3 mt-4">
          {!showDetailsQuiz && (
            <div className="flex flex-col justify-center gap-3 mt-4">
              <h1 className="text-textMainColor">Start Your Quiz</h1>
              <Button
                onPress={() => setshowDetailsQuiz(true)}
                color="primary"
                variant="shadow"
                className="w-1/4 mx-auto"
              >
                <h3>Start Now...</h3>
              </Button>
            </div>
          )}
          {showDetailsQuiz && <CartOfDetailsQuiz />}
        </div>
      </div>
    </div>
  );
}
