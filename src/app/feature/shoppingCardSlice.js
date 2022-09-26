import { createSlice } from "@reduxjs/toolkit";
const data = window.localStorage.getItem("cardItem");
const initialState = data
  ? JSON.parse(data)
  : { product: [], totalAmount: 0, subTotal: 0, deliveryCharge: 50 };

const shoppingCardSlice = createSlice({
  name: "shoppingCard",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      state.product.push(action.payload);
    },
    removeCard: (state, action) => {
      const newProduct = state.product.filter(
        (curEle) => curEle.id !== action.payload
      );
      state.product = newProduct;
    },
    increament: (state, action) => {
      const findProduct = state.product.find(
        (ele) => ele.id === action.payload
      );
      findProduct.quantity++;
      if (findProduct.quantity > 5) {
        findProduct.quantity = 5;
      } else {
        findProduct.totalPrice = findProduct.price * findProduct.quantity;
      }
    },
    decreament: (state, action) => {
      const findProduct = state.product.find(
        (ele) => ele.id === action.payload
      );
      findProduct.quantity--;
      if (findProduct.quantity < 1) {
        findProduct.quantity = 1;
      } else {
        findProduct.totalPrice = findProduct.price * findProduct.quantity;
      }
    },
    totalAmount: (state, action) => {
      let initialValue = 0;
      let totals = state.product.reduce((accumulator, curValue) => {
        return accumulator + curValue.totalPrice;
      }, initialValue);
      state.subTotal = totals;
      let lowTotal = totals ? state.deliveryCharge : 0;
      state.totalAmount = totals + lowTotal;
    },
  },
});
export const { addToCard, removeCard, increament, decreament, totalAmount } =
  shoppingCardSlice.actions;
export default shoppingCardSlice.reducer;
