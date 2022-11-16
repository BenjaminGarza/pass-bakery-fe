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

  const ListContainer = styled.ul`
    margin-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  `;

  return (
    <section>
      <Title>Bread</Title>
      <ListContainer>
        {breadArray.map((item) => MenuBuilder(item))}
      </ListContainer>
    </section>
  );
}

export default Bread;
