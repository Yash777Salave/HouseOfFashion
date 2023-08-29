import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductDetail={
    title:string|null;
    description:string|null;
    price:number | null;
    rating:number | null;
    image:string ;
};

const initialWishlistState: ProductDetail = {
    title:null,
    description:null,
    price:null,
    rating:null,
    image:''
};
export const setProductDetail = createAction<ProductDetail>('setProductDetail');
export const productDetailSlice = createSlice({
  name: "product-detail",
  initialState:initialWishlistState,
  reducers: {
  },
  extraReducers:(b)=>{
    b.addCase(setProductDetail,(state,action)=>{
        return action.payload;
    })
  }
});

export const productDetailReducer= productDetailSlice.reducer;
