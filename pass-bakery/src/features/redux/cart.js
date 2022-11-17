import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { remove } from "./cartSlice";
import styled from "styled-components";

export default function Cart(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const itemQuantity = cart.items.length;
  let price = 0;

  for (let i = 0; i < itemQuantity; i++) {
    price += cart.items[i][1];
  }

  const Aside = styled.aside`
    min-width: 384px;
    border-left: 3px solid lightgrey;
    background-color: #fff;
  `;
  const Title = styled.h2`
    font-weight: bold;
    font-size: 32px;
    padding: 32px;
    margin-bottom: 16px;
  `;
  const TotalText = styled.h3`
    font-weight: bold;
    font-size: 24px;
  `;
  const TotalPrice = styled.span`
    font-size: 21px;
    font-weight: 400;
  `;

  const CheckoutButton = styled.button`
    width: 100%;
    height: 56px;
    color: white;
    background-color: darkolivegreen;
    font-weight: bold;
  `;
  const Div = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 32px;
    padding-top: 128px;
  `;
  const Section = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 4px;
    padding-left: 24px;
    padding-right: 48px;
  `;
  const Button = styled.button`
    margin-top: 8px;
    margin-left: 24px;
    color: darkolivegreen;
    border: none;
    padding: 0px;
  `;
  const ItemTitle = styled.div`
    font-weight: bold;
    margin-top: 8px;
  `;
  const ItemPrice = styled.div`
    font-weight: bold;
    margin-top: 8px;
  `;
  const ItemWrapper = styled.div`
    margin-bottom: 24px;
  `;

  return (
    <Aside>
      <Title>Your Order</Title>
      {cart.items.map((item, itemIndex) => (
        <ItemWrapper>
          <Section>
            <ItemTitle>{item[0]}</ItemTitle>
            <ItemPrice>{"$" + item[1].toFixed(2)}</ItemPrice>
          </Section>
          <div>
            <Button onClick={() => dispatch(remove(itemIndex))}>Remove</Button>
          </div>
        </ItemWrapper>
      ))}

      <Div>
        <TotalText>Your total is:</TotalText>
        <TotalPrice>${price.toFixed(2)}</TotalPrice>
      </Div>
      <CheckoutButton>Checkout ({itemQuantity})</CheckoutButton>
    </Aside>
  );
}
