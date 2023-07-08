import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../combineReducers";

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

// Configure Redux Persist
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
