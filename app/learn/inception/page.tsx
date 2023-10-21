import React from "react";
import "./style.css"; // Import your CSS file for additional styling

const Page = () => {
  return (
    <div className="page-container">
      <div className="header">
        <span className="text-banner text-red font-heading font-bold py-2">
          Inception of The Place
        </span>
        <div className="content-container">
          <div className="left-content">
            <img src="/images/r.place.gif" alt="r/place GIF" />
          </div>
          <div className="right-content">
            <p>
              The inception of The Place concept draws inspiration from the
              fascinating social experiment known as the subreddit "r/place." In
              2017, Reddit users came together to collaborate on a massive
              digital canvas where each participant could only color a single
              pixel every five minutes. What transpired was a vibrant and
              intricate mosaic of art, created through communal efforts and a
              sense of ownership over tiny segments. This experiment ignited the
              spark for a new gaming venture, where players could purchase, own,
              and influence plots within a digital landscape. The idea marries
              the cooperative spirit of "r/place" with the excitement of
              property ownership, strategical trading, and dynamic plot pricing,
              making sui Place an intriguing venture into the world of digital
              landscapes.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
