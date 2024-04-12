import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};
const TodoSlice = createSlice({
  name:"todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Date.now(),
        text: action.payload,
      };
      state.todo.push(todo);
    },
    updateTodo: (state, action) => {
      state.todo = state.todo.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
