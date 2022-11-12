import React from "react";
import { createRoot } from "react-dom/client";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, lng: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.info(position.coords);
      },
      (err) => {
        this.setState({
          errorMessage: err.message,
        });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.lng) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat && this.state.lng) {
      return (
        <div>
          Latitude: {this.state.lat}, Longitude: {this.state.lng}
        </div>
      );
    }

    return <div>Loading...</div>;
  }
}

createRoot(document.getElementById("root")).render(<App />);
