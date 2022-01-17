import React from "react";
import dev from "../../assets/pic1.png";
import "./section.css";

const Section = () => {
  return (
    <div className="portfolio__main-section">
      <div className="portfolio__container">
        <div className="portfolio__texts">
          <h1>hey my name is</h1>
          <h1 className="portfolio__h1-big">Baran Öden</h1>
          <p>
            Professional Front-End React js Developer with 1 years of experience
          </p>
          <button className="portfolio__text-button">my work</button>
        </div>
        <div className="portfolio__image">
          <img src={dev} alt="headerimg" />
        </div>
      </div>
    </div>
  );
};

export default Section;
