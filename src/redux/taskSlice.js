import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "Tasks",
  initialState: {
    Tasks: [],
  },
  reducers: {
    addTasks: (state, action) => {
      state.Tasks.push(action.payload);
    },

    editTasks: (state, action) => {
      state.Tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.description = action.payload.description;
        }
      });
    },

    deleteTasks: (state, action) => {
      state.Tasks = state.Tasks.filter((task) => task.id !== action.payload.id);
    },

    doneTask: (state , action) => {
      state.Tasks.map((task) => {
        if (task.id === action.payload.id) {
          state.Tasks = state.Tasks.filter((task) => task.done !== action.payload.done);
        }
      });
    },
    },
});
export const { addTasks, editTasks, deleteTasks , doneTask } = taskSlice.actions;
export default taskSlice.reducer;
