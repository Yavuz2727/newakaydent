import { createSlice } from "@reduxjs/toolkit";

const CardId = createSlice({
  name: "id",
  initialState: {
    id: "1",
  },
  reducers: {
    idState: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { idState } = CardId.actions;
export default CardId.reducer;
