// src\pages\Footer.jsx
/* eslint-disable react/prop-types */
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background: beige; /* Change color on hover */
  }
`;

const Label = styled.label`
  font-size: 14px;
  cursor: pointer;
`;

const IconHolder = ({
  ui = <>No Icon Found</>,
  label = "",
  isDisabled = false,
  onClick = () => {},
}) => {
  return (
    <Wrapper disabled={isDisabled} onClick={onClick}>
      {ui}
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default IconHolder;
