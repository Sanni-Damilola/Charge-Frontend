import React, { useReducer } from "react";
import styled from "styled-components";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Dispatch from "../Hooks/Dispatch";

const Header = () => {
  const [state, dispatch] = useReducer(Dispatch, { show: false });

  return (
    <Container>
      <Picture>
        <Online></Online>
      </Picture>
      <Icon
        onClick={() => {
          dispatch({ type: "Toggle" });
        }}
      >
        <HiOutlineMenuAlt3 />
      </Icon>
      {state?.show ? <Details></Details> : null}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  z-index: 999;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Picture = styled.div`
  width: 50px;
  margin-left: 30px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  background-color: whitesmoke;
  position: relative;
`;
const Icon = styled.div`
  font-size: 30px;
  margin-right: 30px;
  cursor: pointer;
  color: whitesmoke;
`;

const Details = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);
  width: 200px;
  height: 70px;
  right: 3%;
`;

const Online = styled.div`
  width: 10px;
  height: 10px;
  background-color: lightgreen;
  border-radius: 50%;
  position: absolute;
  right: 9%;
`;
