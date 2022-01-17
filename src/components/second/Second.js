import React from "react";
import "./second.css";
import pic2 from "../../assets/pic2.png";

const Second = () => {
  return (
    <div className="portfolio__section-2">
      <h1 className="portfolio__about-me">About Me</h1>
      <div className="portfolio__container-2">
        <div className="portfolio__image-cont">
          <img src={pic2} />
        </div>
        <div className="portfolio__text-2">
          <p>Front End Developer</p>
          <p>React Js - Next Js Developer</p>
          <p>1 Years of Developer Experience</p>
          <p>Good Management, Communication</p>
          <p>UI - UX Experience</p>
          <p>Vanilla Javascript Developer</p>
          <p>Bootstrap,Tailwind and BEM expert</p>
        </div>
      </div>
    </div>
  );
};

export default Second;
