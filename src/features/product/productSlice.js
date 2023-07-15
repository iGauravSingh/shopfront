import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService'


const initialState = {
    products: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: ''
}

// get products
export const getProducts = createAsyncThunk(
    'products/getProd',
    async (ProductData, thunkAPI) => {
      try {
        // console.log('from getProducts in productSlice')
        const dat = await productService.getAllProduct()
        // console.log(dat)
        return dat
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

// get Search product








export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getProducts.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.products = action.payload
        })
        .addCase(getProducts.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
       
    },
  })

  export const { reset } = productSlice.actions
  export default productSlice.reducer



