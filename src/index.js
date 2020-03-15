import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
	state = { lat: null, errorMessage: "" };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position =>
				this.setState({ lat: position.coords.latitude, errorMessage: "" }),
			err => this.setState({ errorMessage: err.message })
		);
	}

	render() {
		return (
			<div>
				<SeasonDisplay lat={this.state.lat} />
				<br />
				Error: {this.state.errorMessage}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
