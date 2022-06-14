import styled from "styled-components";

function Hamburger() {
  return (
    <>
      <Line />
      <Line />
      <Line />
    </>
  );
}

const Line = styled.div`
  width: 35px;
  height: 3px;
  border-radius: 1px;
  background-color: black;
  margin: 9px 0;
`;

export default Hamburger;
