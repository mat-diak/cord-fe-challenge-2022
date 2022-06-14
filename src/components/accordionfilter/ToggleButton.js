import React from "react";
import styled from "styled-components";

function ToggleButton({ isOpen }) {
  return (
    <>
      <Diagonal />
      <Vertical isOpen={isOpen} />
    </>
  );
}

export default ToggleButton;

const Line = styled.div`
  width: 20px;
  height: 2px;
  border-radius: 1px;
  background-color: black;
  margin: 9px 0;
`;

const Diagonal = styled(Line)`
  position: relative;
`;

const Vertical = styled(Line)`
  position: absolute;
  transform: ${({ isOpen }) => (isOpen ? "rotate(0)" : "rotate(90deg)")};
  transition: transform 0.3s ease-in-out;
`;
