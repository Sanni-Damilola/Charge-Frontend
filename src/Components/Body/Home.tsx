import React from "react";
import styled from "styled-components";

const Home = () => {
  //Current Date
  const [date, setDate] = React.useState("");
  const CurrentDate = () => {
    let currentDate = new Date().toDateString();
    setDate(currentDate);
  };

  React.useEffect(() => {
    CurrentDate();
  }, []);

  return (
    <Container>
      <Time>{date}</Time>
      <PersonName>Hello, Sanni</PersonName>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-left: 32px;
  display: flex;
  flex-direction: column;
`;
const Time = styled.p`
  font-size: 13px;
  margin: 0;
  color: rgb(0, 0, 0, 0.7);
  font-weight: 400;
`;
const PersonName = styled.span`
  font-family: cursive;
  font-size: 20px;
  font-weight: 500;
  color: whitesmoke;
`;
