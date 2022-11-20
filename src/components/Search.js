import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="term">Search</label>
          <input
            type="text"
            name="term"
            id="term"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
