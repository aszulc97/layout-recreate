import Subheader from "./Subheader";
import logo from "./logo.svg";

export default function Services() {
  return (
    <section>
      <Subheader />
      <div id="services">
        <Service title="Strategy" />
        <Service title="Marketing" />
        <Service title="Product" />
        <Service title="Legality" />
        <Service title="Safety" />
        <Service title="Protection" />
      </div>
    </section>
  );
}

function Service(props) {
  return (
    <div className="service">
      <img alt="react logo" src={logo}></img>
      <h4>{props.title}</h4>
      <p>
        Thank you for today! Advice was super impressed with what you brought to the table. They were looking for ideas, and they
        got a ton.
      </p>
    </div>
  );
}
