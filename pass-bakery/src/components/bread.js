import MenuBuilder from "./menuBuilder";
import styled from "styled-components";

export function Bread(props) {
  const breadArray = [
    ["Pain de campagne", 7.0],
    ["Olive and lemon", 7.5],
    ["Brioche", 8.0],
    ["Ciabatta", 5.5],
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
