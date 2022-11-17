import Bread from "./components/bread";
import Breakfast from "./components/breakfast";
import Cart from "./features/redux/cart";
import Coffee from "./components/coffee";
import Headline from "./components/headline/headline";
import styled from "styled-components";

const Body = styled.body`
  display: flex;
`;

const Primary = styled.main`
  font-family: "Source Sans Pro", "Helvetica", "Arial";
  min-width: 200px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

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
      <Body>
        <Primary>
          <Headline></Headline>
          <Coffee></Coffee>
          <Breakfast></Breakfast>
          <Bread />
        </Primary>
        <Cart />
      </Body>
    </html>
  );
}

export default App;
