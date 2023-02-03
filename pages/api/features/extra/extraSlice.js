import { createSlice } from "@reduxjs/toolkit";

const extraSlice = createSlice({
  name: "extra",
  initialState: { data: 0, data2: 0 },
  reducers: {
    setUpdateScore: (state, action) => {
      // console.log("update Score")
      state.data = state.data + 1;
    },
    setUpdateScore2: (state, action) => {
      // console.log("update Score")
      state.data2 = state.data2 + 1;
    },
  },
});

export const { setUpdateScore, setUpdateScore2 } = extraSlice.actions;

export default extraSlice.reducer;

export const selectCurrentData = (state) => state.extra.data;
export const selectCurrentData2 = (state) => state.extra.data2;
