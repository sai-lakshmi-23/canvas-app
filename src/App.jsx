// src\App.jsx
import Header from './pages/Header'
import Body from './pages/Body'
import Footer from './pages/Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
`;

function App() {

  return (
    <Wrapper>
      <Header />
      <Body />
      <Footer />
    </Wrapper>
  )
}

export default App
