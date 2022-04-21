import Subheader from "./Subheader";
import LogoItem from "./LogoItem";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div id="testimonialText">
        <Subheader />
        <p>Stacy's mom has got it goin' on she's all I want and I've waited so long</p>
      </div>
      <div id="testimonialCont">
        <Testimonial name="Agatka" title="Some chicken" />
        <Testimonial name="Zuzka" title="The dog" />
        <Testimonial name="Yo mama" title="Yo mama" />
        <Testimonial name="Jeff Bezos" title="CEO" />
      </div>
    </section>
  );
}

function Testimonial({ name, title }) {
  return (
    <div className="testimonial">
      <LogoItem />
      <p>
        I am sitting in the morning at the diner on the corner I am waiting at the counter for the man to pour the coffee And he
        fills it only halfway and before I even argue He is looking out the window at somebody coming in
      </p>
      <Author name={name} title={title} />
    </div>
  );
}

function Author({ name, title }) {
  return (
    <p>
      {name}, {title}
    </p>
  );
}
