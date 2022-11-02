import "./App.css";
import Headline from "./Headline/Headline";
import Coffee from "./Coffee/Coffee";
import Breakfast from "./Breakfast/Breakfast";
import Bread from "./Bread/Bread";

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
          <Headline></Headline>
          <Coffee></Coffee>
          <Breakfast></Breakfast>
          <Bread></Bread>
        </main>
      </body>
    </html>
  );
}

export default App;
