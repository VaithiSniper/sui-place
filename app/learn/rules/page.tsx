import React from "react";
import "./style.css"; // Import your CSS file for additional styling

const Page = () => {
  return (
    <div className="page-container">
      <div className="header"></div>
      <span className="text-banner text-red font-heading font-bold py-2">
          Rules
        </span>
        <div className="text-container">
            <span className="text-3xl text-white">
              Veni. &nbsp;
            </span>
            <span className="text-3xl text-red">
              Vedi. &nbsp;
            </span>
            <span className="text-3xl text-white">
              Vici.&nbsp;
            </span>
          </div>
        
        <div className="block-container">
            <div className="block third">
            <div className="block-title">
            <span className=" text-5xl font-heading py-2 tracking-wider">
            Rookie
            </span>
            </div>
            <span className="text-1xl py-2 tracking-wider">
            1. Place Buy requests<br></br>
            2. Join or create your own community<br></br>
            3. Expand, well max 10 units :(
            </span>
            </div>
            <div className="block buy">
            <div className="block-title">
            <span className="text-5xl font-heading py-2 tracking-wider">
            Savvy
            </span>
            </div>
            <span className="text-1xl py-2 tracking-wider">
            1. Sell and expand their community<br></br>
            2. Respond to buy requests<br></br>
            3. No auction, we follow the queue :)
            </span>
            </div>
            <div className="block third">
            <div className="block-title">
            <span className="text-5xl font-heading py-2 tracking-wider">
            Gains
            </span>
            </div>
            <span className="text-1xl py-2 tracking-wider">
            New price = Standard Price(10) <br></br>
            + A percentage based on the neighborhood community<br></br>
            + Bonus if your team is on bull run
            </span>
            </div>
        </div>
        <div className="block-container">
            <div className="block buy">
            <div className="block-title">
            <span className=" text-5xl font-heading py-2 tracking-wider">
            Stalemate
            </span>
            </div>
            <span className="text-1xl py-2 tracking-wider">
            1. Equally owned by two commuinites<br></br>
            2. Only a third party can break it<br></br>
            3. Community should persuade to lean on their side 
            </span>
            </div>
            <div className="block third">
            <div className="block-title">
            <span className="text-5xl font-heading py-2 tracking-wider">
            Loss
            </span>
            </div>
            <span className="text-1xl py-2 tracking-wider">
            1. A traitor shortsells<br></br>
            2. Members panic sell<br></br>
            3. Community loses value
            </span>
            </div>
            <div className="block buy">
            <div className="block-title">
            <span className="text-5xl text-gold font-heading py-2 tracking-wider">
            Victory
            </span>
            </div>
            <span className="text-1xl py-2 tracking-wider">
            1. All the units are conquered by your community<br></br>
            2. Shorting rival's properties <br></br>
            3. Winner Winner Chicken Dinner
            </span>
            </div>
        </div>
    </div>
  );
};

export default Page;