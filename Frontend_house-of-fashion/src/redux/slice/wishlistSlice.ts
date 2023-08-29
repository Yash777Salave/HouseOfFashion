import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

type WishList={
    title:string|null;
    description:string|null;
    price:number | null;
    rating:number | null;
    image:string ;
}[];

const initialWishlistState: WishList = [{
    title:null,
    description:null,
    price:null,
    rating:null,
    image:''
}];
export const setWishlist = createAction<WishList>('setWishlist');
export const setRemoveWishlist = createAction<string>('setRemoveWishlist');
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState:initialWishlistState,
  reducers: { 
  },
  extraReducers:(b) => {
    b.addCase(setWishlist,(state,action)=>{
        console.log('inside redux',state);
        return [...state,...action.payload];
    });
    b.addCase(setRemoveWishlist,(state,action)=>{
      const newState = state.filter((s)=>s.title !== action.payload);
      return newState;
    })
  }
});

export const wishlistReducer= wishlistSlice.reducer;
