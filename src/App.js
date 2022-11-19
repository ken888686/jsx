import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "Title 1",
    content: "Content 1",
  },
  {
    title: "Title 2",
    content: "Content 2",
  },
  {
    title: "Title 3",
    content: "Content 3",
  },
];

const App = () => {
  return (
    <div className="">
      <Accordion items={items} />
    </div>
  );
};

export default App;
