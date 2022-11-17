import MenuBuilder from "./menuBuilder";
import styled from "styled-components";

const coffeeArray = [
  ["Espresso", 2.75],
  ["Cappuccino", 3.5],
  ["Latte", 4.0],
  ["Drip", 2.5],
  ["Pour Over", 4.75],
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
const Invisible = styled.div`
  border: 0;
  height: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  flex: 260px;
  min-width: 40%;
`;

const Coffee = () => {
  return (
    <section>
      <Title>Coffee</Title>
      <ListContainer>
        {coffeeArray.map((item) => MenuBuilder(item))}
        <Invisible></Invisible>
      </ListContainer>
    </section>
  );
};

export default Coffee;
