import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./Utilities";

export function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    // prevent the form from refreshing the whole page that's the browser default behavior
    event.preventDefault();

    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };

    if (text.length > 0) {
      props.addThought(thought);

      //Clear the input field’s entered text after adding a new thought.
      setText("");
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleTextChange}
        value={text}
        aria-label="به چه می‌اندیشی؟"
        placeholder="به چه می‌اندیشی؟"
      />
      <input type="submit" value="اضاف" />
    </form>
  );
}
