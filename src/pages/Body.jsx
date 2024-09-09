// src/pages/Body.jsx
import Draggable from "react-draggable";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  handleTextChange,
  handleDrag,
  selectText,
  updateState,
} from "../redux/textSlice";
import CustomInput from "../components/CustomInput";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 8;
`;

const Container = styled.div`
  background: #f0f0f0;
  width: 90%;
  height: 90%;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: none;
  box-shadow: 8px 8px 16px #c5c5c5, -8px -8px 16px #ffffff;
  padding: 20px;
`;

const DraggableText = styled.div`
  position: absolute;
  cursor: move;
  overflow: hidden;
`;

const Body = () => {
  const dispatch = useDispatch();
  const texts = useSelector((state) => state.texts.texts);
  const fontFamily = useSelector((state) => state.texts.fontFamily);
  const fontSize = useSelector((state) => state.texts.fontSize);
  const positions = useSelector((state) => state.texts.positions);
  const bold = useSelector((state) => state.texts.bold);
  const italic = useSelector((state) => state.texts.italic);
  const underline = useSelector((state) => state.texts.underline);
  const textAlign = useSelector((state) => state.texts.textAlign);

  const handleTextChangeLocal = (id, newText) => {
    dispatch(handleTextChange({ id, newText }));
  };

  const handleDragLocal = (e, data, id) => {
    dispatch(handleDrag({ id, x: data.x, y: data.y }));
  };

  return (
    <Wrapper>
      <Container className="container">
        {texts.map(
          ({
            id,
            text,
            fontFamily: textFontFamily = "Arial",
            fontSize: textFontSize = "16",
            bold: textBold = false,
            italic: textItalic = false,
            underline: textUnderline = false,
            textAlign: textAlignProp = "left",
          }) => (
            <Draggable
              key={id}
              defaultPosition={positions[id] || { x: 0, y: 0 }}
              onStop={(e, data) => handleDragLocal(e, data, id)}
              bounds="parent"
            >
              <DraggableText
                style={{
                  fontFamily: textFontFamily || fontFamily,
                  fontSize: `${textFontSize || fontSize}px`,
                  bold: textBold ?? bold,
                  italic: textItalic ?? italic,
                  underline: textUnderline ?? underline,
                  textAlign: textAlignProp || textAlign,
                }}
                onClick={() => {
                  dispatch(selectText(id));
                }}
                data-testid={"draggable"}
              >
                <CustomInput
                  type="text"
                  text={text}
                  onFocus={() => {
                    dispatch(
                      updateState({
                        fontSize: textFontSize,
                        fontFamily: textFontFamily,
                        bold: textBold,
                        italic: textItalic,
                        underline: textUnderline,
                        textAlign: textAlignProp,
                      })
                    );
                  }}
                  onTextChange={(value) => handleTextChangeLocal(id, value)}
                  style={{
                    fontFamily: textFontFamily || fontFamily,
                    fontSize: `${textFontSize || fontSize}px`,
                    fontWeight: textBold ?? bold ? "bold" : "normal",
                    fontStyle: textItalic ?? italic ? "italic" : "normal",
                    textDecoration:
                      textUnderline ?? underline ? "underline" : "none",
                    textAlign: textAlignProp || textAlign,
                  }}
                />
              </DraggableText>
            </Draggable>
          )
        )}
      </Container>
    </Wrapper>
  );
};

export default Body;
