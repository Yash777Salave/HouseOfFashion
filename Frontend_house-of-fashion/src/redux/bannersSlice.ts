import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Banner {
  id: number;
  imageURL: string;
}

interface BannersState {
  currentBannerIndex: number;
  banners: Banner[];
}

const initialState: BannersState = {
  currentBannerIndex: 0,
  banners: [],
};

const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {
    setCurrentBannerIndex: (state, action: PayloadAction<number>) => {
      state.currentBannerIndex = action.payload;
    },
  },
});

export const { setCurrentBannerIndex } = bannersSlice.actions;
export default bannersSlice.reducer;
