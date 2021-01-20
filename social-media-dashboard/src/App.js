import Card from "./Components/card";
import Toggle from "./Components/toggle"
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="topBg"></div>
			<div className="head">
				<div className="logo-container">
					<h2 className="Smd">Social Media Dashboard</h2>
					<p className="Smd-t">Total Follower: 23,004</p>
				</div>
				<div className="toggle-container">
					<p className="Dm">Dark Mode </p>
					<Toggle/>
				</div>
			</div>
			<Card />
		</div>
	);
}

export default App;
