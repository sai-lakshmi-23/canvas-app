/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  background: #f0f0f0;
  color: ${(props) => (props.focused ? 'black' : '#666')};
  transition: all 0.3s ease;
  outline: none;
  cursor: ${(props) => (props.focused ? 'text' : 'pointer')};
  outline: none;
  border: none;
  box-shadow: none;

`;

const CustomInput = ({ text, onTextChange, onFocus, style = {} }) => {
  const [focused, setFocused] = useState(false);

  return (
    <StyledInput
      type="text"
      style={style}
      value={text}
      focused={focused}
      placeholder={focused ? '' : 'Type here...'}
      onChange={(e) => onTextChange(e.target.value)}
      onBlur={() => setFocused(false)}
      onFocus={() => {
        onFocus()
        setFocused(true)
      }}
    />
  );
};

export default CustomInput;
