import bread from "./bread.jpeg";
import logo from "./one-pass.svg";
import styled from "styled-components";

const Title = styled.h2`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 16px;
  padding-top: 32px;
`;
const Section = styled.section`
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid lightgrey;
  padding-top: 48px;
  padding-bottom: 48px;
`;

const Bread = styled.img`
  max-width: 480px;
  margin-left: 48px;
`;

const PassHeadline = styled.h1`
  font-family: "Qwitcher Grypen";
  font-size: 160px;
`;

const Headline = () => {
  return (
    <Section>
      <div>
        <img src={logo} alt="one-pass" />
        <PassHeadline>Pass Bakery</PassHeadline>
        <Title>Hours</Title>
        <br />
        <p>
          Mon-Fri 6AM-5PM PT,
          <br />
          Sat-Sun 7AM-4PM PT
        </p>
        <br></br>
      </div>
      <div>
        <Bread src={bread} alt="Fresh baked bread" />
      </div>
    </Section>
  );
};

export default Headline;
