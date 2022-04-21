import LogoItem from "./LogoItem";
import Button from "./Button";
import logo from "./logo.svg";

export default function Header() {
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
          <Button text="Get started >" />
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
          <ListItem name="Who we are" />
          <ListItem name="The problems" />
          <ListItem name="Our services" />
          <ListItem name="Testimonials" />
        </ul>
      </nav>
      <Button text="Contact us" />
    </div>
  );
}

function ListItem(props) {
  return <li>{props.name}</li>;
}
