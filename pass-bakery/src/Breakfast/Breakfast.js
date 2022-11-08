import styled from "styled-components";

const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 16px;
`;
const Subtitle = styled.h3`
  font-weight: bold;
  font-size: 24px;
`;
const ListContainer = styled.ul`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

const ListItem = styled.div`
  padding: 16px;
  margin: 16px;
  border: 2px solid lightgray;
  border-radius: 5px;
  flex: 200px;
  min-width: 40%;
`;

const Paragraph = styled.div`
  font-style: italic;
  color: grey;
`;

const Breakfast = () => {
  return (
    <section>
      <Title>Breakfast:</Title>
      <ListContainer>
        <ListItem>
          <Subtitle>Oatmeal</Subtitle>
          <br />
          <Paragraph class="menu-text">$4.00</Paragraph>
        </ListItem>
        <ListItem>
          <Subtitle>Toast</Subtitle>
          <br />
          <Paragraph class="menu-text">$3.50</Paragraph>
        </ListItem>
        <ListItem>
          <Subtitle>Egg Sandwich</Subtitle>
          <br />
          <Paragraph class="menu-text">$5.50</Paragraph>
        </ListItem>
        <ListItem>
          <Subtitle>Egg and Cheese Sandwich</Subtitle>
          <br />
          <Paragraph class="menu-text">$6.50</Paragraph>
        </ListItem>
      </ListContainer>{" "}
    </section>
  );
};

export default Breakfast;
