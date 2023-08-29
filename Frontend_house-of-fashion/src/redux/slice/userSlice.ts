import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

type User={
    name:string|null;
    email:string|null;
    phone_no:number | null;
};

const initialUserState: User = {
    name:null,
    email:null,
    phone_no:null,
};
export const setUser = createAction<User>('setUser');
export const userSlice = createSlice({
  name: "user",
  initialState:initialUserState,
  reducers: {
  },
  extraReducers:(b)=>{
    b.addCase(setUser,(state,action)=>{
        return action.payload;
    })
  }
});

export const userReducer= userSlice.reducer;
