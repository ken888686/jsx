import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const options_1 = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

const options_2 = [
  {
    title: "Red",
    content: "red",
  },
  {
    title: "Green",
    content: "green",
  },
  {
    title: "Blue",
    content: "blue",
  },
];

const App = () => {
  const onSelectedChange = () => {
    console.log("onSelectedChange");
  };

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={options_2} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          items={options_2}
          label="Hi"
          selected={options_1[0]}
          onSelectedChange={onSelectedChange}
          options={options_1}
        />
      </Route>
      <Route path="/translate">
        <Translate items={options_2} />
      </Route>
    </div>
  );
};

export default App;
