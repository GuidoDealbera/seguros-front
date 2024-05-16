import { combineReducers } from "@reduxjs/toolkit";
import clientReducer from "./Features/clientSlice";
import { api } from "./Services/api";

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    client: clientReducer
});

export default rootReducer;