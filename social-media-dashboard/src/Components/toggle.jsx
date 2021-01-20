import React from "react";
import "./toggle.css";

function toggle() {
	return (
		<div>
			<label className="switch">
				<input type="checkbox"></input>
				<span className="slider round"></span>
			</label>
		</div>
	);
}

export default toggle;
