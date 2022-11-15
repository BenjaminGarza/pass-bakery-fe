import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

export default function Cart() {
  const priceArray = useSelector((state) => state.cart.map((x) => x[1]));
  const numberOfItems = priceArray.length();
  const totalPrice = priceArray.reduce((x, y) => x + y, 0);

  const dispatch = useDispatch();

  const Aside = styled.aside`
    min-width: 512px;
    border-left: 3px solid lightgrey;
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
    font-size: 24px;
  `;

  const CheckoutButton = styled.button`
    width: 100%;
    height: 56px;
    color: white;
    background-color: darkgreen;
    font-weight: bold;
  `;
  const Div = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 32px;
    padding-top: 128px;
  `;
  const Section = styled.section``;

  return (
    <Aside>
      <Title>Your Order</Title>
      <Section></Section>
      <Div>
        <TotalText>Your total is:</TotalText>
        <TotalPrice>${totalPrice}</TotalPrice>
      </Div>
      <CheckoutButton>Checkout ({numberOfItems})</CheckoutButton>
    </Aside>
  );
}
