import { createSlice } from "@reduxjs/toolkit";

// Define user slice types
interface IUserState {
  secretKey: string;
  publicKey: string;
}

// define initial user state
const initialState: IUserState = {
  secretKey: "",
  publicKey: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setKeys: (state, { payload }) => {
      state.secretKey = payload.secretKey;
      state.publicKey = payload.publicKey;
    },
  },
});

export default userSlice.reducer;

export const { setKeys } = userSlice.actions;
