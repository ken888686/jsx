import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (term) => {
    this.setState({ term: term });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} action="submit" className="ui form">
          <div className="field">
            <label htmlFor="term">Video Search</label>
            <input
              type="text"
              name="term"
              id="term"
              value={this.state.term}
              onChange={(e) => this.onInputChange(e.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
