import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProducts } from '../api/interface/product';

export interface PurchaseState {
  data: IProducts[];
}

export const purchaseSlice = createSlice({
  name: 'purchase',
  initialState: {
    data: [] as IProducts[],
  },
  reducers: {
    addPurchase: (state, action: PayloadAction<IProducts>) => {
      state.data.push(action.payload);
    },
    removePurchase: (state, action) => {
      state.data = state.data.filter(
        (purchase) => purchase.id != action.payload,
      );
    },
    setPurchase: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addPurchase, removePurchase, setPurchase } =
  purchaseSlice.actions;

//   @ts-expect-error
export const showPurchase = (state) => state;

const purchaseReducer = purchaseSlice.reducer;
export default purchaseReducer;

export const store = configureStore({
  reducer: {
    value: purchaseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
