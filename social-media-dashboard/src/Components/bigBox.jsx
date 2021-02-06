import React from "react";
import MediaIcon from "../Components/mediaIcon";
import "./bigBox.css";

function bigBox(props) {
	let num = " ";
	if (props.followers > 9999) {
		num = Math.round(props.followers / 1000) + "k";
	} else {
		num = props.followers;
	}

	return (
		<div className="bigBox" style={props.colorTop}>
			<div className="big-head">
				<MediaIcon type={props.mediaIcon} />
				<p className="username">{props.username}</p>
			</div>
			<div className="big-foot">
				<p className="followers">{num}</p>
				<p id="title">{props.title}</p>
				<p className={`small-difference ${
						props.difference > 0 ? "big-positive" : "big-negative"}`}>
					<i className={`${ props.difference > 0 ? "fas fa-caret-up" : "fas fa-caret-down"}`}/>
					{Math.abs(props.difference)} Today
				</p>
			</div>
		</div>
	);
}

export default bigBox;
