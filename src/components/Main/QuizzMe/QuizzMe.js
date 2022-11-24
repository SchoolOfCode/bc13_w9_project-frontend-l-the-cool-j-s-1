import React from "react";
// import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";
import "./QuizzMe.css";
import questionMark from "../../../Images/question.png";
import glasses from "../../../Images/glasses.png";

function QuizzMe() {
  // const [input, setInput] = useState("");
  const [question, setQuestion] = useState("");
  const [correct, setCorrect] = useState("");
  const [incorrectA, setIncorrectA] = useState("");
  const [incorrectB, setIncorrectB] = useState("");
  const [right, setRight] = useState(false);
  const [wrong, setWrong] = useState(false);

  /* 1) Send a fetch request to the Api
   to get the quizQuestion back from the Database.*/

  async function fetchQuestion() {
    //port number hard coded - could pass in the PORT env variable?
    const response = await fetch(`http://localhost:3005/api/quizquestions`);
    const data = await response.json();
    setQuestion(data.payload[0].question);
    // console.log(data.payload[0].question);
  }
  fetchQuestion();

  async function fetchCorrect() {
    //port number hard coded - could pass in the PORT env variable?
    const response = await fetch(`http://localhost:3005/api/quizquestions`);
    const data = await response.json();
    setCorrect(data.payload[0].correctanswer);
    // console.log(data.payload[0].correctanswer);
  }

  fetchCorrect();

  async function fetchIncorrectA() {
    //port number hard coded - could pass in the PORT env variable?
    const response = await fetch(`http://localhost:3005/api/quizquestions`);
    const data = await response.json();
    setIncorrectA(data.payload[0].incorrectanswera);
    // console.log(data.payload[0].correctanswer);
  }

  fetchIncorrectA();

  async function fetchIncorrectB() {
    //port number hard coded - could pass in the PORT env variable?
    const response = await fetch(`http://localhost:3005/api/quizquestions`);
    const data = await response.json();
    setIncorrectB(data.payload[0].incorrectanswerb);
    // console.log(data.payload[0].correctanswer);
  }

  fetchIncorrectB();
  // const rightAnswer = () => {
  //   if (input === "1") {
  //     alert("Correct");
  //   } else {
  //     alert("Wrong");
  //   }
  // };
  // const handleChange = (e) => {
  //   setInput(e.target.value);
  //   console.log(input);
  // };

  // let answers = [1, 2, 3, 4];

  function checkAnswer(check) {
    //if selected answer matches correct answer, return "correct!"
    if (right === true) {
      console.log("correct!");
    } else {
      console.log("incorrect!");
    }
  }

  return (
    <div className="quiz-div">
      <div>
        <div className="quiz-header-div">
          <div className="glasses-div">
            <img src={glasses} alt="lappy-glasses" className="glasses" />
          </div>
          <img
            src={questionMark}
            alt="question-mark"
            className="question-one"
          />
          <h1 className="quiz-header-text">Quiz Time</h1>
          <img
            src={questionMark}
            alt="question-mark"
            className="question-two"
          />
        </div>

        <img
          src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVyE/giphy.gif"
          alt="gif"
        />

        <p className="question-p">{question}</p>
        <div className="answers" onClick={checkAnswer}>
          {correct}
        </div>
        <div className="answers" onClick={checkAnswer}>
          {incorrectA}
        </div>
        <div className="answers" onClick={checkAnswer}>
          {incorrectB}
        </div>
      </div>
    </div>
  );
}

export default QuizzMe;

//Future idea 💡

// const handleMenuOne = () => {
//   console.log("clicked 1");
// };

// const handleMenuTwo = () => {
//   console.log("clicked 2");
// };
// const handleMenuThree = () => {
//   console.log("clicked 3");
// };
// const handleMenuFour = () => {
//   console.log("clicked 4");
// };
// <Dropdown
//         trigger={<button>Select Week</button>}
//         menu={[
//           <button onClick={handleMenuOne}>Week 1</button>,
//           <button onClick={handleMenuTwo}>Week 2</button>,
//           <button onClick={handleMenuThree}>Week 3</button>,
//           <button onClick={handleMenuFour}>Week 4</button>,
//         ]}
//       />
