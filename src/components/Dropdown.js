import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ selected, onSelectedChange, options }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // 設定[]可以表示只在第一次render執行一次，以後都不會在執行
  useEffect(() => {
    document.body.addEventListener(
      "click",
      (event) => {
        if (ref.current.contains(event.target)) {
          return;
        }
        setOpen(false);
      },
      {
        capture: true,
      }
    );
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

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
    <div ref={ref} className="ui form">
      <div className="field">
        <label htmlFor="color-selector" className="label">
          Select a color:
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          id="color-selector"
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
