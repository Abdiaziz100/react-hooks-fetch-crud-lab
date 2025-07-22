import React, { useEffect, useState } from "react";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then(setQuestions);
  }, []);

  return (
    <main>
      <h1>Quiz Admin</h1>
      <QuestionForm setQuestions={setQuestions} />
      <QuestionList questions={questions} setQuestions={setQuestions} />
    </main>
  );
}

export default App;
