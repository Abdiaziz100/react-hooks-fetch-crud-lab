import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  function handleDelete(id) {
    setQuestions(questions.filter((q) => q.id !== id));
  }

  function handleUpdate(updatedQ) {
    const updated = questions.map((q) =>
      q.id === updatedQ.id ? updatedQ : q
    );
    setQuestions(updated);
  }

  return (
    <section>
      <h2>Questions</h2>
      <ul>
        {questions.map((q) => (
          <QuestionItem
            key={q.id}
            question={q}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
