// src\pages\Footer.jsx
/* eslint-disable react/prop-types */

import styled from "styled-components";

const Image = styled.img`
  width: 50px;
  height: 60px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-family: "Celebrate";
  padding: 0px 10px;
`;
const ImageWrapper = styled.div``;
const ImageHolder = ({ src = "", alt = "" }) => {
  return (
    <ImageWrapper>
      <Image src={src} alt={alt} />
      <Label>Celebrare</Label>
    </ImageWrapper>
  );
};

export default ImageHolder;
