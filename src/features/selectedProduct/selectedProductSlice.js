
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import selectedProductService from './selectedProductService'


const initialState = {
    selectedProduct: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: ''
}




// get product with id
export const getProductsWithId = createAsyncThunk(
    'products/getProdWithId',
    async (prodId, thunkAPI) => {
      try {
        // console.log('from getProducts in productSlice')
        const dat = await selectedProductService.getProductWithId(prodId)
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


  export const selectedProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getProductsWithId.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getProductsWithId.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.selectedProduct = action.payload
        })
        .addCase(getProductsWithId.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
       
    },
  })

  export const { reset } = selectedProductSlice.actions
  export default selectedProductSlice.reducer




