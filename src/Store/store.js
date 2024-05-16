import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import { api } from './Services/api';

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        "client",
        //agregar todos los names de las slice que creemos
    ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistMiddleware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
}).concat(api.middleware)

const store = configureStore({
    reducer: persistedReducer,
    middleware: persistMiddleware,
})

export const persistor = persistStore(store);
export default store;