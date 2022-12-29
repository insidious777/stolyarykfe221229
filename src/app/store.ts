import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import widgetReducer from '../components/Widget/widgetSlice';
export const store = configureStore({
  reducer: {
    widget: widgetReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
