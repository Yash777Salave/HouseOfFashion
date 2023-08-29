import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Bag={
    title:string|null;
    description:string|null;
    price:number | null;
    rating:number | null;
    image:string ;
}[];

const initialBagState: Bag = [{
    title:null,
    description:null,
    price:null,
    rating:null,
    image:''
}];
export const setBag = createAction<Bag>('setBag');
export const setRemoveBag = createAction<string>('setRemoveBag');

export const bagSlice = createSlice({
  name: "bag",
  initialState:initialBagState,
  reducers: {
  },
  extraReducers:(b)=>{
    b.addCase(setBag,(state,action)=>{
        console.log('inside redux',state);
        return [...state,...action.payload];
    });
    b.addCase(setRemoveBag,(state,action)=>{
      const newState = state.filter((s)=>s.title !== action.payload);
      return newState;
    })
  }
});

export const bagReducer= bagSlice.reducer;
