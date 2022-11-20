import React from "react";

const Dropdown = ({ selected, onSelectedChange, options }) => {
  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="color-selector" className="label">
          Select a color:
        </label>
        <div
          className="ui selection dropdown visible active"
          id="color-selector"
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
