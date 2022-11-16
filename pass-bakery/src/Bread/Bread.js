import styled from "styled-components";
import { add } from "../features/counter/cartSlice";
import { useDispatch } from "react-redux";

export function Bread(props) {
  const dispatch = useDispatch();

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

  return (
    <section>
      <Title>Bread</Title>
      <ListContainer>
        <ListItem Button onClick={() => dispatch(add(["pain", "7.00"]))}>
          <Subtitle>Pain de campagne</Subtitle>
          <br />
          <Paragraph>$7.00</Paragraph>
        </ListItem>
        <ListItem>
          <Subtitle>Olive and lemon</Subtitle>
          <br />
          <Paragraph>$7.50</Paragraph>
        </ListItem>
        <ListItem>
          <Subtitle>Brioche</Subtitle>
          <br />
          <Paragraph>$8.00</Paragraph>
        </ListItem>
        <ListItem>
          <Subtitle>Ciabatta</Subtitle>
          <br />
          <Paragraph>$5.50</Paragraph>
        </ListItem>
      </ListContainer>
    </section>
  );
}

export default Bread;
