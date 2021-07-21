import { configureStore } from '@reduxjs/toolkit';
import appDataReducer from './data/index';

export default configureStore({
  reducer: {
    appData: appDataReducer,
  },
});
