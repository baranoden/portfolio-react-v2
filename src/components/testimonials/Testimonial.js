import React from "react";
import "./testimonial.css";
import p1 from "../../assets/image.jpeg";
import p2 from "../../assets/image2.jpeg";
import p3 from "../../assets/image3.jpeg";
import Cards from "../../apps/cards/Cards";

const Testimonial = () => {
  const testimonialData = [
    {
      image: p1,
      name: "Jessica Luis",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
    },
    {
      image: p2,
      name: "Lerry H",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
    },
    {
      image: p3,
      name: "Hannah K",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus! ",
    },
  ];
  return (
    <div className="portfolio__testi">
      <h1>Testimonials</h1>
      <div className="portfolio__card-container">
        {testimonialData.map((item, index) => (
          <Cards
            image={item.image}
            name={item.name}
            text={item.text}
            key={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
