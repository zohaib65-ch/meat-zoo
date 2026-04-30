import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UiState = {
  bannerText: string;
};

const initialState: UiState = {
  bannerText: "Live WhatsApp Orders - Fast Response",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setBannerText: (state, action: PayloadAction<string>) => {
      state.bannerText = action.payload;
    },
  },
});

export const { setBannerText } = uiSlice.actions;

export default uiSlice.reducer;
