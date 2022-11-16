import React from "react";
import { add } from "../features/redux/cartSlice";
import styled from "styled-components";
import { useDispatch } from "react-redux";

export default function MenuBuilder(props) {
  const dispatch = useDispatch();
  const itemTitle = props[0];
  const itemPrice = props[1];
  // console.log(typeof itemPrice, "Here is item type");

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
    //id

    <ListItem
      key={itemTitle}
      Button
      onClick={() => dispatch(add([itemTitle, itemPrice]))}
    >
      <Subtitle>{itemTitle}</Subtitle>
      <br />
      <Paragraph>{itemPrice.toFixed(2)}</Paragraph>
    </ListItem>
  );
}
