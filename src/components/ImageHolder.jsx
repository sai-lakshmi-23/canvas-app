// src\pages\Footer.jsx
/* eslint-disable react/prop-types */

import styled from "styled-components"

const Image = styled.img`
  width: 50px;
  height: 60px;
  padding: 10px;
`
const ImageWrapper = styled.div`

`
const ImageHolder = ({src = "", alt = ""}) => {
  return (
    <ImageWrapper>
      <Image src={src} alt={alt} />
    </ImageWrapper>
  )
}

export default ImageHolder
