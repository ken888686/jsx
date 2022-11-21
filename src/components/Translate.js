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

  return (
    <div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
