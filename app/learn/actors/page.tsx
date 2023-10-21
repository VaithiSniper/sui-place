import React from "react";
import "./style.css"; // Import your CSS file for additional styling

const Page = () => {
  return (
    <div className="page-container">
      <span className="text-banner text-blue font-heading font-bold py-2 underline">
        Actors
      </span>
      <div className="block-container">
        <div className="block bg-gold">
          <div className="block-title text-white">
            <span className="text-5xl font-heading py-2 tracking-wider">
              Buyer
            </span>
          </div>
          <span className="text-1xl py-2 tracking-wider">
            1. Place Buy requests<br></br>
            2. Join or create your own community<br></br>
            3. Expand
          </span>
        </div>
        <div className="block buy">
          <div className="block-title">
            <span className="text-5xl font-heading py-2 tracking-wider">
              Seller
            </span>
          </div>
          <span className="text-1xl py-2 tracking-wider">
            1. Place Sale requests<br></br>
            2. Respond to buy requests<br></br>
            3. First come first sale
          </span>
        </div>
      </div>
      <div className="image-container">
        <img src="/images/buy.jpg" alt="Image Description" />
      </div>
    </div>
  );
};

export default Page;



