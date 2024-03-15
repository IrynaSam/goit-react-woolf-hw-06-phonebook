import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const rootreducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootreducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
        ],
        ignoredActionsPaths: ['payload.register', 'payload.rehydrate'],
        ignoredPaths: ['some.path.to.ignore'],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
