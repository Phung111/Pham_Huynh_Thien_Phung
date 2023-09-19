import { createSlice } from "@reduxjs/toolkit";

const namespace = "baseData";

const initialState = {
  data: {
    webs: [],
    others: [],
    javascripts: [],
    projects: [],
    buttons: [],
  },
};

const baseData = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setWebs: (state, action) => {
      state.data.webs = action.payload;
    },
    setOthers: (state, action) => {
      state.data.others = action.payload;
    },
    setJavaScripts: (state, action) => {
      state.data.javascripts = action.payload;
    },
    setProjects: (state, action) => {
      state.data.projects = action.payload;
    },
  },
});

const { reducer, actions } = baseData;
export const { setWebs, setJavaScripts, setProjects, setOthers } = actions;
export default reducer;
