import React from "react";
import "./smallBox.css";
import MediaIcon from "../Components/mediaIcon";



function smallBox(props) {

	let num = " ";
	if (props.amount > 9999) {
		num = Math.round(props.amount / 1000) + "k";
	} else {
		num = props.amount;
	}

	return (
		<div className="smallBox">
			<div className="small-head">
				<p className="type">{props.type}</p>
				<MediaIcon type={props.mediaIcon} />
			</div>
			<div className="small-foot">
				<p className="amount">{num}</p>
				<p className={`small-modifier ${
					props.modifier > 0 ? "small-positive" : "small-negative"}`}>
						<i className={`${props.modifier > 0 ? "fas fa-caret-up" : "fas fa-caret-down" }`}/>
						{Math.abs(props.modifier)} %
					</p>
			</div>
		</div>
	);
}

export default smallBox;
