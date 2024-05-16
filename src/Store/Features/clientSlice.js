import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [],
  client: {},
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    setAllClients: (state, action) => {
      state.clients = action.payload;
    },
    setClient: (state, action) => {
      state.client = action.payload;
    },
    clearState: (state) => {
      state.client = {};
      state.clients = [];
    },
  },
});

export const { clearState, setAllClients, setClient } = clientSlice.actions;
export default clientSlice.reducer;
