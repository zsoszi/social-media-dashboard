import React from "react";
import Fb from "../Png/facebook.png";
import In from "../Png/instagram.png";
import Tw from "../Png/twitter.png";
import Yo from "../Png/youtube.png";

function mediaIcon(props) {
	let social = "";
	if (props.type === "facebook") {
		social = Fb;
		return <img className="icon facebook" src={social} alt="" />;
	} else if (props.type === "twitter") {
		social = Tw;
		return <img className="icon twitter" src={social} alt="" />;
	} else if (props.type === "instagram") {
		social = In;
		return <img className="icon instagram" src={social} alt="" />;
	} else if (props.type === "youtube") {
		social = Yo;
		return <img className="icon youtube" src={social} alt="" />;
	}
}

export default mediaIcon;
