import { useState } from "react";
import styled from "styled-components";

import * as colors from "../../colors";

import ToggleButton from "./ToggleButton";

export default function AccordionFilter({ options, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const mappedOptions = options.map((option) => option.name);

  return (
    <>
      <Header
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <ToggleButton isOpen={isOpen} />
        <Title>{title}</Title>
      </Header>
      {isOpen && (
        <OptionsList isOpen={isOpen}>
          {mappedOptions.map((option) => {
            return (
              <Option key={option}>
                <input id={option} type="checkbox" />
                <label htmlFor={option}>{option}</label>
              </Option>
            );
          })}
        </OptionsList>
      )}
    </>
  );
}

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-left: 0.5em;
`;

const Header = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
`;

const Option = styled.div`
  display: block;
  margin-top: 0.4em;

  label {
    margin-left: 0.6em;
    font-weight: 300;
  }
`;

const OptionsList = styled.ul`
  padding: 0;
  margin: 0;
`;
