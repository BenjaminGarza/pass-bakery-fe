import "./Coffee.css";

const Coffee = () => {
  return (
    <section>
      <h2>Coffee</h2>
      <ul>
        <li>
          <h3>Espresso</h3>
          <br />
          <p class="menu-text">$2.75</p>
        </li>
        <li>
          <h3>Cappuccino</h3>
          <br />
          <p class="menu-text">$3.50</p>
        </li>
        <li>
          <h3>Latte</h3>
          <br />
          <p class="menu-text">$4.00</p>
        </li>
        <li>
          <h3>Drip</h3>
          <br />
          <p class="menu-text">$2.50</p>
        </li>
        <li>
          <h3>Pour Over</h3>
          <br />
          <p class="menu-text">$4.75</p>
        </li>
        <li class="invisible"></li>
      </ul>
    </section>
  );
};

export default Coffee;
