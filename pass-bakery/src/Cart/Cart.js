import styled from "styled-components";

let cartItems = 0;
let totalPrice = 0.0;

const Aside = styled.aside``;
const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 16px;
`;
const Total = styled.h3`
  font-weight: bold;
  font-size: 24px;
`;
const CheckoutButton = styled.button``;

const Cart = () => {
  return (
    <Aside>
      <Title>Your Order</Title>

      <Total>Your total is: ${totalPrice}</Total>
      <CheckoutButton>Checkout ({cartItems})</CheckoutButton>
    </Aside>
  );
};

export default Cart;
