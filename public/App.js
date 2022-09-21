import React, { useState } from "react";
import { AddThoughtForm } from "./AddThoughtForm";
import { Thought } from "./Thought";
import { generateId, getNewExpirationTime } from "./Utilities";

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "اینجا محل ارسال پیام موقت است",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "پیشنهادات بعد از 15 ثانیه حذف میشوند.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "عرضه موقت و زماندار که بزودی به انتها میرسند.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "نوشتار منقضی شونده.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((prev) => [thought, ...prev]);
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) =>
      thoughts.filter((thoughts) => thoughts.id !== thoughtIdToRemove)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>پیام های فانی و زودگر</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
