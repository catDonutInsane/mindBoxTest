import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { IS, taskType } from "../types/types";

const initialState: IS = {
  taskList: [],
  leftTasks: 0,
};

const reducer = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<taskType>) {
      state.taskList.push(action.payload);
      state.leftTasks += 1;
    },
    setIsChecked(state, action: PayloadAction<number>) {
      state.taskList.map((i) => {
        if (i.id === action.payload) {
          i.isChecked = !i.isChecked;
        }
      });
      state.leftTasks -= 1;
    },
    clearCompleted(state) {
      state.taskList = state.taskList.filter((i) => i.isChecked === false);
    },
  },
});
export const { addTask, setIsChecked, clearCompleted } = reducer.actions;
export default reducer.reducer;
