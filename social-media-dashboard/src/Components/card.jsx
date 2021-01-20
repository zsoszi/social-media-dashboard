import React from "react";
import BigBox from "./bigBox";
import SmallBox from "./smallBox";
import data from "../sample-data";
import "./card.css";

function bigCard(props) {
	
	
	return (
		<div className="bigCard">
			<div className="bigCardBox">
				<BigBox					
					username={"@" + data.platforms[0].facebook.name}
					followers={data.platforms[0].facebook.followers}
					title="FOLLOWERS"
					difference={data.platforms[0].facebook.difference}
					mediaIcon={Object.keys(data.platforms[0])[0]}
					colorTop={{ borderTop: "4px solid hsl(208, 92%, 53%)" }}
				/>

				<BigBox
					username={"@" + data.platforms[1].twitter.name}
					followers={data.platforms[1].twitter.followers}
					title="FOLLOWERS"
					difference={data.platforms[1].twitter.difference}
					mediaIcon={Object.keys(data.platforms[1])[0]}
					colorTop={{ borderTop: "4px solid hsl(203, 89%, 53%)" }}
				/>

				<BigBox
					username={"@" + data.platforms[2].instagram.name}
					followers={data.platforms[2].instagram.followers}
					title="FOLLOWERS"
					difference={data.platforms[2].instagram.difference}
					mediaIcon={Object.keys(data.platforms[2])[0]}
					colorTop={{ borderTop: "4px solid", borderImage: "linear-gradient(90deg,hsl(37, 97%, 70%), hsl(329, 70%, 58%)) 1"}}
				/>

				<BigBox
					username={data.platforms[3].youtube.name}
					followers={data.platforms[3].youtube.followers}
					title="SUBSCRIBERS"
					difference={data.platforms[3].youtube.difference}
					mediaIcon={Object.keys(data.platforms[3])[0]}
					colorTop={{ borderTop: "4px solid hsl(348, 97%, 39%)" }}
				/>
			</div>
			<h2 className="Smd-O">Overview - Today</h2>
			<div className="smallCardBox">
				<SmallBox
					platform={data.events[0].platform}
					type={data.events[0].type}
					amount={data.events[0].amount}
					modifier={data.events[0].modifier}
					mediaIcon={Object.keys(data.platforms[0])[0]}
				/>
				<SmallBox
					platform={data.events[1].platform}
					type={data.events[1].type}
					amount={data.events[1].amount}
					modifier={data.events[1].modifier}
					mediaIcon={Object.keys(data.platforms[0])[0]}
				/>
				<SmallBox
					platform={data.events[2].platform}
					type={data.events[2].type}
					amount={data.events[2].amount}
					modifier={data.events[2].modifier}
					mediaIcon={Object.keys(data.platforms[2])[0]}
				/>
				<SmallBox
					platform={data.events[3].platform}
					type={data.events[3].type}
					amount={data.events[3].amount}
					modifier={data.events[3].modifier}
					mediaIcon={Object.keys(data.platforms[2])[0]}
				/>
			</div>
			<div className="smallCardBox">
				<SmallBox
					platform={data.events[4].platform}
					type={data.events[4].type}
					amount={data.events[4].amount}
					modifier={data.events[4].modifier}
					mediaIcon={Object.keys(data.platforms[1])[0]}
				/>
				<SmallBox
					platform={data.events[5].platform}
					type={data.events[5].type}
					amount={data.events[5].amount}
					modifier={data.events[5].modifier}
					mediaIcon={Object.keys(data.platforms[1])[0]}
				/>
				<SmallBox
					platform={data.events[6].platform}
					type={data.events[6].type}
					amount={data.events[6].amount}
					modifier={data.events[6].modifier}
					mediaIcon={Object.keys(data.platforms[3])[0]}
				/>
				<SmallBox
					platform={data.events[7].platform}
					type={data.events[7].type}
					amount={data.events[7].amount}
					modifier={data.events[7].modifier}
					mediaIcon={Object.keys(data.platforms[3])[0]}
				/>
			</div>
		</div>
	);
}

export default bigCard;
