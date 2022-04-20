import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Testimonials />
    </div>
  );
}

function Header() {
  return (
    <header>
      <Nav />
      <div id="header">
        <div id="heading">
          <h1>Blockchain finally made accessible</h1>
          <p>
            Unleash the potential Unleash the potential Unleash the potential Unleash the potential Unleash the potential Unleash
            the potential Unleash the potential Unleash the potential
          </p>
          <Button />
        </div>
        <img alt="react logo" src={logo}></img>
      </div>
      <div id="logos">
        <LogoItem />
        <LogoItem />
        <LogoItem />
        <LogoItem />
        <LogoItem />
      </div>
    </header>
  );
}

function Nav() {
  return (
    <div id="nav">
      <p>Byont</p>
      <nav>
        <ul>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </nav>
      <Button />
    </div>
  );
}

function ListItem() {
  return <li>Our services</li>;
}

function Button() {
  return <button>Click me</button>;
}

function LogoItem() {
  return (
    <div className="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-droplet-half"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
        />
        <path
          fillRule="evenodd"
          d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
        />
      </svg>
      <p>yourlogo</p>
    </div>
  );
}

function Services() {
  return (
    <section>
      <Subheader />
      <div id="services">
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </section>
  );
}

function Subheader() {
  return (
    <>
      <h5>Our services</h5>
      <h2>Where we can add value</h2>
    </>
  );
}

function Service() {
  return (
    <div className="service">
      <img alt="react logo" src={logo}></img>
      <h4>Strategy</h4>
      <p>
        Thank you for today! Advice was super impressed with what you brought to the table. They were looking for ideas, and they
        got a ton.
      </p>
    </div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials">
      <div id="testimonialText">
        <Subheader />
        <p>Stacy's mom she's got it goin' on she's all I want and I've waited so long</p>
      </div>
      <div id="testimonialCont">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <div className="testimonial">
      <LogoItem />
      <p>
        I am sitting in the morning at the diner on the corner I am waiting at the counter for the man to pour the coffee And he
        fills it only halfway and before I even argue He is looking out the window at somebody coming in
      </p>
      <p>Yo mama, CEO</p>
    </div>
  );
}

export default App;
