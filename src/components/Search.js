import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        `https://en.wikipedia.org/api/rest_v1/page/related/${term}`,
        {
          params: {},
        }
      );
      setResults(data);
    };

    if (term) {
      search();
    }
  }, [term]);

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
