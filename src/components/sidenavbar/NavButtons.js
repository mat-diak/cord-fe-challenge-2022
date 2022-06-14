import styled from "styled-components";

import * as colors from "../../colors";

export function Hamburger() {
  return (
    <>
      <Line />
      <Line />
      <Line />
    </>
  );
}

export function CloseButton() {
  return (
    <CloseBtn>
      <NELine />
      <NWLine />
    </CloseBtn>
  );
}

const Line = styled.div`
  width: 35px;
  height: 3px;
  border-radius: 1px;
  background-color: ${colors.darkBlue};
  margin: 9px 0;
`;

const CloseBtn = styled.div`
  position: relative;
  top: 5px;
  div {
    background-color: ${colors.white};
  }
`;

const NELine = styled(Line)`
  width: 30px;
  transform: rotate(-45deg);
  position: relative;
`;

const NWLine = styled(Line)`
  width: 30px;
  transform: rotate(45deg);
  position: relative;
  top: -12px;
`;
