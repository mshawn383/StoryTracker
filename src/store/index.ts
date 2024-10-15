import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './TaskSlice'; // Import the default export which is the reducer

export const store = configureStore({
  reducer: {
    task: taskReducer, // Use the default export
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
