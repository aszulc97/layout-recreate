import Subheader from "./Subheader";
import logo from "./logo.svg";

export default function Services() {
  return (
    <section>
      <Subheader />
      <div id="services">
        {ServicesArray.map((service) => (
          <Service title={service.title} text={service.text} />
        ))}
        {/* <Service title="Strategy" />
        <Service title="Marketing" />
        <Service title="Product" />
        <Service title="Legality" />
        <Service title="Safety" />
        <Service title="Protection" /> */}
      </div>
    </section>
  );
}

const ServicesArray = [
  {
    title: "Strategy",
    text: "Strategy generally involves setting goals and priorities, determining actions to achieve the goals, and mobilizing resources to execute the actions.",
  },
  {
    title: "Marketing",
    text: "Marketing refers to all activities a company does to promote and sell products or services to consumers. · Marketing makes use",
  },
  {
    title: "Product",
    text: "Definition: A product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form. Every product is",
  },
  {
    title: "Legality",
    text: "Legality, in respect of an act, agreement, or contract is the state of being consistent with the law or of being lawful or unlawful in a given jurisdiction,",
  },
  {
    title: "Safety",
    text: "Safety is the state of being safe, the condition of being protected from harm or other danger. Safety can also refer to the control of recognized hazards",
  },
  {
    title: "Protection",
    text: "protection in American English ; 1. the act of protecting or the state of being protected; preservation from injury or harm ; 2. a thing, person, or group that",
  },
];

function Service(props) {
  return (
    <div className="service">
      <img alt="react logo" src={logo}></img>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
}
