import React from "react";
import { useSelector } from "react-redux";
import { add } from "../features/counter/cartSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export default function MenuBuilder(props) {
  //const dispatch = useDispatch();
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
    color: grey;
  `;

  return (
    //in sub menu files
    // maybe loop through an array of the titles and prices
    //for each item
    //wouldn't need to add click events to each
    // itemTitle = array[i][0]
    //itemPrice = array[i][1]
    //maybe call array.foreach(item => menuBuilder(item))
    //maybe call it menuBuilder()
    //would need to return multiple

    //menuBuilder takes in item as props
    //Button onClick={() => dispatch(add([itemTitle, itemPrice]))}
    <ListItem>
      <Subtitle>{itemTitle}</Subtitle>
      <br />
      <Paragraph>{itemPrice}</Paragraph>
    </ListItem>
  );
}
