import {createSlice} from "@reduxjs/toolkit"

const extraSlice = createSlice({
    name: 'extra',
    initialState: {data:0},   
    reducers:{
        setUpdateScore: (state, action) => {
        // console.log("update Score")
           state.data= state.data+1

        },
    }
})

export const {setUpdateScore} = extraSlice.actions

export default extraSlice.reducer

export const selectCurrentData = (state) => state.extra.data
