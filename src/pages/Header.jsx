//src\pages\Header.jsx
import styled from "styled-components";
import CelebrareIcon from "../assets/celebrare.jpeg";
import ImageHolder from "../components/ImageHolder";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import IconHolder from "../components/IconHolder";
import { useDispatch, useSelector } from "react-redux";
import { redo, undo } from "../redux/textSlice";

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
`;
const Header = () => {
  const dispatch = useDispatch()
  const { currentIndex, textHistory } = useSelector(state => state.texts);
  return (
    <Wrapper>
      <ImageHolder src={CelebrareIcon} alt={"Flying Bird Icon"} />

      <IconWrapper>
        <IconHolder ui={<UndoIcon />} label={"Undo"} onClick={() => dispatch(undo())} isDisabled={currentIndex === 0} />
        <IconHolder ui={<RedoIcon />} label={"Redo"} onClick={() => dispatch(redo())} isDisabled={currentIndex === textHistory.length - 1}/>
      </IconWrapper>

    </Wrapper>
  );
};

export default Header;
