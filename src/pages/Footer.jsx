// src/pages/Footer.jsx
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {
  addText,
  handleFontFamilyChange,
  handleFontSizeChange,
  handleBoldChange,
  handleItalicChange,
  handleUnderlineChange,
  handleTextAlignChange,
} from "../redux/textSlice";
import { Button, Fab, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { fontFamilyOptions } from "../constants";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";

const CustomSearch = styled(Autocomplete)`
  width: 100%;
  max-width: 250px;
`;

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const ControlPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const FontSizeControl = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const FontSizeDisplay = styled.span`
  margin: 0 5px;
`;

const Footer = () => {
  const dispatch = useDispatch();
  const fontFamily = useSelector((state) => state.texts.fontFamily);
  const fontSize = useSelector((state) => state.texts.fontSize);
  const bold = useSelector((state) => state.texts.bold);
  const italic = useSelector((state) => state.texts.italic);
  const underline = useSelector((state) => state.texts.underline);
  const textAlign = useSelector((state) => state.texts.textAlign);

  const handleFontFamilyChangeLocal = (event, value) => {
    dispatch(handleFontFamilyChange(value));
  };

  const handleFontSizeChangeLocal = (change) => {
    dispatch(handleFontSizeChange(change));
  };

  const handleBoldChangeLocal = () => {
    dispatch(handleBoldChange(!bold));
  };

  const handleItalicChangeLocal = () => {
    dispatch(handleItalicChange(!italic));
  };

  const handleUnderlineChangeLocal = () => {
    dispatch(handleUnderlineChange(!underline));
  };

  const handleTextAlignChangeLocal = (event, newAlignment) => {
    dispatch(handleTextAlignChange(newAlignment));
  };

  return (
    <Wrapper>
      <ControlPanel>
        <Button onClick={() => dispatch(addText())} variant="contained">
          Add Text
        </Button>
        <CustomSearch
          freeSolo
          options={fontFamilyOptions}
          value={fontFamily}
          onChange={handleFontFamilyChangeLocal}
          renderInput={(params) => (
            <TextField {...params} label="Font Family" variant="outlined" />
          )}
        />
        <FontSizeControl>
          <Fab
            size="small"
            color="primary"
            aria-label="remove"
            onClick={() => handleFontSizeChangeLocal(-2)}
          >
            <RemoveIcon />
          </Fab>
          <FontSizeDisplay>{fontSize}px</FontSizeDisplay>
          <Fab
            size="small"
            color="primary"
            aria-label="add"
            onClick={() => handleFontSizeChangeLocal(2)}
          >
            <AddIcon />
          </Fab>
        </FontSizeControl>
        <ToggleButtonGroup
          value={bold ? 'bold' : 'normal'}
          exclusive
          onChange={handleBoldChangeLocal}
        >
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={italic ? 'italic' : 'normal'}
          exclusive
          onChange={handleItalicChangeLocal}
        >
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={underline ? 'underline' : 'none'}
          exclusive
          onChange={handleUnderlineChangeLocal}
        >
          <ToggleButton value="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          value={textAlign}
          exclusive
          onChange={handleTextAlignChangeLocal}
        >
          <ToggleButton value="left">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRightIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </ControlPanel>
    </Wrapper>
  );
};

export default Footer;
