import { createSlice, nanoid } from "@reduxjs/toolkit";
import  petsdata  from '../data/pets.json';

const tasksInitialState = petsdata;

const petsSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = petsSlice.actions;
export const petsReducer = petsSlice.reducer;
