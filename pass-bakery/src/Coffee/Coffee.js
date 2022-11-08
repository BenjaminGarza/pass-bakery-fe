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

const ListItem = styled.li`
  padding: 16px;
  margin: 16px;
  border: 2px solid lightgray;
  border-radius: 5px;
  flex: 200px;
  min-width: 40%;
`;

const Paragraph = styled.p`
  font-style: italic;
  color: grey;
`;
const Invisible = styled.div`
  border: 0;
  height: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
`;

const Coffee = () => {
  return (
    <section>
      <Title>Coffee</Title>
      <ListContainer>
        <ListItem>
          <Subtitle>Espresso</Subtitle>
          <br />
          <Paragraph>$2.75</Paragraph>
        </ListItem>
        <ListItem>
          <Subtitle>Cappuccino</Subtitle>
          <br />
          <Paragraph>$3.50</Paragraph>
        </ListItem>
        <ListItem>
          <Subtitle>Latte</Subtitle>
          <br />
          <Paragraph>$4.00</Paragraph>
        </ListItem>
        <ListItem>
          <Subtitle>Drip</Subtitle>
          <br />
          <Paragraph>$2.50</Paragraph>
        </ListItem>
        <ListItem>
          <Subtitle>Pour Over</Subtitle>
          <br />
          <Paragraph>$4.75</Paragraph>
        </ListItem>
        <Invisible></Invisible>
      </ListContainer>
    </section>
  );
};

export default Coffee;
