import React from "react";
import { add } from "../features/redux/cartSlice";
import styled from "styled-components";
import { useDispatch } from "react-redux";

export default function MenuBuilder(props) {
  const dispatch = useDispatch();
  const itemTitle = props[0];
  const itemPrice = props[1];

  const Subtitle = styled.h3`
    font-weight: bold;
    font-size: 24px;
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
  `;

  return (
    <ListItem Button onClick={() => dispatch(add([itemTitle, itemPrice]))}>
      <Subtitle>{itemTitle}</Subtitle>
      <br />
      <Paragraph>{itemPrice.toFixed(2)}</Paragraph>
    </ListItem>
  );
}
