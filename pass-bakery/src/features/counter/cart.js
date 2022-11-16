import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Cart(props) {
  const cart = useSelector((state) => state.cart);
  const itemQuantity = cart.items.length;
  let price = 0;
  if (itemQuantity > 1) {
    for (let i = 1; i < itemQuantity; i++) {
      console.log(price, cart.items[i][1], "Here one");
      console.log(typeof price, typeof cart.items[i][1], "here is the test");
      price += cart.items[i][1];
      console.log(price, cart.items[i][1], "Here two");
    }
  }

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
      {cart.items.map((item) => (
        <div key={item}>
          <div>
            {item[0]}
            {"$" + item[1].toFixed(2)}
          </div>
          <div>
            <button>Remove</button>
          </div>
        </div>
      ))}

      <Section>{}</Section>
      <Div>
        <TotalText>Your total is:</TotalText>
        <TotalPrice>${price.toFixed(2)}</TotalPrice>
      </Div>
      <CheckoutButton>Checkout ({itemQuantity})</CheckoutButton>
    </Aside>
  );
}
