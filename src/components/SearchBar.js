import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form action="submit" className="ui form">
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              type="text"
              name="search"
              id="search"
              // 不加括號 -> 觸發執行
              // 加括號 -> render 的時候就會執行
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
