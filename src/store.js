import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  user: userSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//   reducer: {
//       user: userSlice.reducer
//   },
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk],
// })

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;