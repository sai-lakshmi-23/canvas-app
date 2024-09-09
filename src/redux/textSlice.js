  // src/redux/textSlice.js
  import { createSlice } from '@reduxjs/toolkit';

  const initialState = {
    texts: [],
    textHistory: [[]],
    currentIndex: 0,
    positions: {},
    selectedText: null,
    fontFamily: 'Arial',
    fontSize: 16,
    bold: false,
    italic: false,
    underline: false,
    textAlign: 'left',
  };

  const textSlice = createSlice({
    name: 'texts',
    initialState,
    reducers: {
      addText(state) {
        const newText = { id: Date.now(), text: '', x: 0, y: 0, fontFamily: state.fontFamily, fontSize: state.fontSize };
        state.texts.push(newText);
        state.positions[newText.id] = { x: 0, y: 0 };
        state.textHistory = [...state.textHistory.slice(0, state.currentIndex + 1), state.texts];
        state.currentIndex = state.textHistory.length - 1;
      },
      handleTextChange(state, action) {
        const { id, newText } = action.payload;
        state.texts = state.texts.map(t => t.id === id ? { ...t, text: newText } : t);
        state.textHistory = [...state.textHistory.slice(0, state.currentIndex + 1), state.texts];
        state.currentIndex = state.textHistory.length - 1;
      },
      handleFontFamilyChange(state, action) {
        state.fontFamily = action.payload;
        if (state.selectedText !== null) {
          state.texts = state.texts.map(t => t.id === state.selectedText ? { ...t, fontFamily: action.payload } : t);
          state.textHistory = [...state.textHistory.slice(0, state.currentIndex + 1), state.texts];
          state.currentIndex = state.textHistory.length - 1;
        }
      },
      handleFontSizeChange(state, action) {
        const newFontSize = Math.max(8, state.fontSize + action.payload);
        state.fontSize = newFontSize;
        if (state.selectedText !== null) {
          state.texts = state.texts.map(t => t.id === state.selectedText ? { ...t, fontSize: newFontSize } : t);
          state.textHistory = [...state.textHistory.slice(0, state.currentIndex + 1), state.texts];
          state.currentIndex = state.textHistory.length - 1;
        }
      },
      handleDrag(state, action) {
        const { id, x, y } = action.payload;
        state.positions[id] = { x, y };
      },
      undo(state) {
        if (state.currentIndex > 0) {
          state.currentIndex -= 1;
          state.texts = state.textHistory[state.currentIndex];
        }
      },
      redo(state) {
        if (state.currentIndex < state.textHistory.length - 1) {
          state.currentIndex += 1;
          state.texts = state.textHistory[state.currentIndex];
        }
      },
      selectText(state, action) {
        state.selectedText = action.payload;
      },
      updateState(state, action) {
        return {
          ...state,
          ...action.payload
        }
      },
      handleBoldChange(state, action) {
        state.bold = action.payload;
        if (state.selectedText !== null) {
          state.texts = state.texts.map(t =>
            t.id === state.selectedText ? { ...t, bold: action.payload } : t
          );
          state.textHistory = [...state.textHistory.slice(0, state.currentIndex + 1), state.texts];
          state.currentIndex = state.textHistory.length - 1;
        }
      },
      handleItalicChange(state, action) {
        state.italic = action.payload;
        if (state.selectedText !== null) {
          state.texts = state.texts.map(t =>
            t.id === state.selectedText ? { ...t, italic: action.payload } : t
          );
          state.textHistory = [...state.textHistory.slice(0, state.currentIndex + 1), state.texts];
          state.currentIndex = state.textHistory.length - 1;
        }
      },
      handleUnderlineChange(state, action) {
        state.underline = action.payload;
        if (state.selectedText !== null) {
          state.texts = state.texts.map(t =>
            t.id === state.selectedText ? { ...t, underline: action.payload } : t
          );
          state.textHistory = [...state.textHistory.slice(0, state.currentIndex + 1), state.texts];
          state.currentIndex = state.textHistory.length - 1;
        }
      },
      handleTextAlignChange(state, action) {
        state.textAlign = action.payload;
        if (state.selectedText !== null) {
          state.texts = state.texts.map(t =>
            t.id === state.selectedText ? { ...t, textAlign: action.payload } : t
          );
          state.textHistory = [...state.textHistory.slice(0, state.currentIndex + 1), state.texts];
          state.currentIndex = state.textHistory.length - 1;
        }
      },
    },
  });

  export const {
    addText,
    handleTextChange,
    handleFontFamilyChange,
    handleFontSizeChange,
    handleDrag,
    undo,
    redo,
    selectText,
    updateState,
    handleBoldChange,
    handleItalicChange,
    handleUnderlineChange,
    handleTextAlignChange,
  } = textSlice.actions;

  export default textSlice.reducer;
