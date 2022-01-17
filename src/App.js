import "./App.css";
import Header from "./components/header/Header";
import Second from "./components/second/Second";
import Section from "./components/section/Section";
import Testimonial from "./components/testimonials/Testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Second />
      <Testimonial />
    </div>
  );
}

export default App;
