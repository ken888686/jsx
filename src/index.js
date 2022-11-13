import React from "react";
import { createRoot } from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, lng: null, errorMessage: "" };

  /*
  do something only one time
  data loading
  */
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.info(position.coords);
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  /*
  每次更新 state/props 都會被呼
  */
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log(prevState);
    console.log(this.state);
  }

  /*
  移除 component 使用
  */
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  /*
  return JSX only
  no network request
  */
  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.lng) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat && this.state.lng) {
      return <SeasonDisplay lat={this.state.lat} lng={this.state.lng} />;
    }

    return <Spinner />;
  }
}

createRoot(document.getElementById("root")).render(<App />);
