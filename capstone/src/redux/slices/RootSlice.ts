import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        height: "Height",
        weight: "Weight",
        type: "Type",
    },
    reducers: {
       chooseName: (state, action) => { state.name = action.payload }, 
       chooseHeight: (state, action) => { state.height = action.payload },
       chooseWeight: (state, action) => { state.weight = action.payload },
       chooseType: (state, action) => { state.type = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseHeight, chooseWeight, chooseType } = rootSlice.actions