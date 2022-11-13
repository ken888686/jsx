import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form action="submit" className="ui form">
          <div className="field">
            <label htmlFor="term">Image Search</label>
            <input
              type="text"
              name="term"
              id="term"
              value={this.state.term}
              // 不加括號 -> 觸發執行
              // 加括號 -> render 的時候就會執行
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
          <button type="submit" className="ui primary button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
