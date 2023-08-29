import { configureStore } from "@reduxjs/toolkit";
import bannersReducer from "./bannersSlice";
import { baseAPI } from "./service";
import { wishlistReducer } from "./slice/wishlistSlice";
import { productDetailReducer } from "./slice/productDetailSlice";
import { userReducer } from "./slice/userSlice";
import { bagReducer } from "./slice/bagSlice";


const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]:baseAPI.reducer,
    banners: bannersReducer,
    wishlist:wishlistReducer,
    bag:bagReducer,
    productDetail:productDetailReducer,
    user:userReducer
  },
  middleware:(getDefaultMiddleware) =>
  getDefaultMiddleware().concat(baseAPI.middleware)
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
