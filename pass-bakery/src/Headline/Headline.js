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
  border-bottom: 1px solid grey;
  padding-top: 48px;
  padding-bottom: 48px;
`;

const Bread = styled.img`
  max-width: 520px;
`;

const PassHeadline = styled.h1`
  font-family: "Qwitcher Grypen";
  font-size: 160px;
`;
var day = new Date().getDay;
var time = new Date().getHours;
console.log(day, time);

const Headline = () => {
  return (
    <Section>
      <div>
        <img src={logo} alt="one-pass" />
        <PassHeadline>Pass Bakery</PassHeadline>
        <p>620 N 25th St, San Francisco, CA</p>
        <Title>Hours</Title>
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
