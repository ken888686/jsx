import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "A",
    value: "a",
  },
  {
    label: "B",
    value: "b",
  },
  {
    label: "C",
    value: "c",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="text">Enter</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <Dropdown
          label="Select a Language:"
          options={options}
          selected={language}
          onSelectedChange={setLanguage}
        />
      </div>
    </div>
  );
};

export default Translate;
