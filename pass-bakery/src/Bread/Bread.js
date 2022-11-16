import styled from "styled-components";
import { add } from "../features/counter/cartSlice";
import { useDispatch } from "react-redux";
import MenuBuilder from "../Cart/MenuBuilder";

export function Bread(props) {
  const breadArray = [
    ["Pain de campagne", "$7.00"],
    ["Olive and lemon", "$7.50"],
    ["Brioche", "$8.00"],
    ["Ciabatta", "$5.50"],
  ];

  const Title = styled.h2`
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 16px;
  `;

  return (
    <section>
      <Title>Bread</Title>
      {breadArray.map((item) => MenuBuilder(item))}
    </section>
  );
}

export default Bread;
