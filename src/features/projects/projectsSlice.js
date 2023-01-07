import { createSlice } from "@reactjs/toolkit";

const initialState = {};

const projectsSlice = createSlice({
    name: "project",
    initialState,
    reducers: {},
});

// action ar reducer gula export korbo
export const {} = projectsSlice.actions;
export default projectsSlice.reducer;
