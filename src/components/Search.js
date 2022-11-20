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
      setResults(data.pages);
    };

    if (term) {
      search();
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.extract_html }} />
          {/* dangerouslySetInnerHTML: 可以直接顯示伺服器回傳的html內容，但需要相信伺服器不會回傳惡意內容而產生XXS攻擊 */}
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
