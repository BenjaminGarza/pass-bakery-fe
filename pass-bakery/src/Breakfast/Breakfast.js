import styled from "styled-components";
import MenuBuilder from "../Cart/MenuBuilder";

const breakfastArray = [
  ["Oatmeal", "$4.00"],
  ["Toast", "$3.50"],
  ["Egg Sandwich", "$5.50"],
  ["Egg and Cheese Sandwich", "$6.50"],
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

const Breakfast = () => {
  return (
    <section>
      <Title>Breakfast:</Title>
      <ListContainer>
        {breakfastArray.map((item) => MenuBuilder(item))}
      </ListContainer>
    </section>
  );
};

export default Breakfast;
