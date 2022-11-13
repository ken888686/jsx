import React from "react";

class SearchBar extends React.Component {
  state = { term: "Test" };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`${this.state.term}: ${new Date().toLocaleString()}`);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="term">Image Search</label>
            <input
              type="text"
              name="term"
              id="term"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
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
