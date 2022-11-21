import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Chinese Simplified",
    value: "zh-CN",
  },
  {
    label: "Chinese Traditional",
    value: "zh-TW",
  },
  {
    label: "Japanese",
    value: "ja",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("我想睡覺");

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
      </div>
      <Dropdown
        label="Select a Language:"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
