import { createSlice } from "@reduxjs/toolkit";

const namespace = "baseData";

const initialState = {
  data: {
    webs: [],
    menus: [],
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
    setMenus: (state, action) => {
      state.data.menus = action.payload;
    },
    setJavaScripts: (state, action) => {
      state.data.javascripts = action.payload;
    },
    setProjects: (state, action) => {
      state.data.projects = action.payload;
    },
    setButtons: (state, action) => {
      state.data.buttons = action.payload;
    },
  },
});

const { reducer, actions } = baseData;
export const { setWebs, setButtons, setJavaScripts, setProjects, setMenus } =
  actions;
export default reducer;
