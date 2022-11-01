import logo from "./one-pass.svg";
import bread from "./bread.jpeg";
import "./App.css";

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="style.css" />
        <title>PassBakery</title>
      </head>
      <body>
        <main>
          <section class="headline-container">
            <div class="">
              <img src={logo} alt="one-pass" />
              <h1>Pass Bakery</h1>
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
          <h2>Breakfast:</h2>
          <ul>
            <li>
              <h3>Oatmeal</h3>
              <br />
              <p class="menu-text">$4.00</p>
            </li>
            <li>
              <h3>Toast</h3>
              <br />
              <p class="menu-text">$3.50</p>
            </li>
            <li>
              <h3>Egg Sandwich</h3>
              <br />
              <p class="menu-text">$5.50</p>
            </li>
            <li>
              <h3>Egg and Cheese Sandwich</h3>
              <br />
              <p class="menu-text">$6.50</p>
            </li>
          </ul>
          <h2>Bread</h2>
          <ul>
            <li>
              <h3>Pain de campagne</h3>
              <br />
              <p class="menu-text">$7.00</p>
            </li>
            <li>
              <h3>Olive and lemon</h3>
              <br />
              <p class="menu-text">$7.50</p>
            </li>
            <li>
              <h3>Brioche</h3>
              <br />
              <p class="menu-text">$8.00</p>
            </li>
            <li>
              <h3>Ciabatta</h3>
              <br />
              <p class="menu-text">$5.50</p>
            </li>
          </ul>
        </main>
      </body>
    </html>
  );
}

export default App;