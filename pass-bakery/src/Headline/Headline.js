import logo from "./one-pass.svg";
import bread from "./bread.jpeg";
import "./Headline.css";
const Headline = () => {
  return (
    <section class="headline-container">
      <div class="">
        <img src={logo} alt="one-pass" />
        <h1 class="pass-headline">Pass Bakery</h1>
        <p>620 N 25th St, San Francisco, CA</p>
        <h2 class="hours">Hours</h2>
        <p>
          Mon-Fri 6AM-5PM PT,
          <br />
          Sat-Sun 7AM-4PM PT
        </p>
      </div>
      <div class="">
        <img class="bread" src={bread} alt="Fresh baked bread" />
      </div>
    </section>
  );
};

export default Headline;
