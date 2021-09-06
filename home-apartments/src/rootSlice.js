import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    fullName: "",
    email: "",
    phoneNumber: null,
    salaryRange: null,
  },
  reducers: {
    getFullName: (state, action) => {
      state.fullName = action.payload;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
    getPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    getSalaryRange: (state, action) => {
      state.salaryRange = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const { getFullName, getEmail, getPhoneNumber, getSalaryRange } =
  rootSlice.actions;
