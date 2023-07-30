import { createSlice } from "@reduxjs/toolkit";

const HeaderName = createSlice({
  name: "name",
  initialState: {
    name: "Anasayfa",
  },
  reducers: {
    nameState: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { nameState } = HeaderName.actions;
export default HeaderName.reducer;
