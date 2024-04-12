import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlices"
const Store=configureStore({
    reducer:TodoSlice
});

export default Store;