import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/product/productSlice'
import selectedProductReducer from '../features/selectedProduct/selectedProductSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer:{
        product: productReducer,
        selectedProduct: selectedProductReducer,
        user: authReducer
    }
})





