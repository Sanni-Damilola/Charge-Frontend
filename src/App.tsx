import React from "react";
import styled from "styled-components";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AllRoutes from "./Components/Routes/AllRoutes";

function App() {
  return (
    <Container>
      <Header />
      <AllRoutes />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #4e58df;
`;
