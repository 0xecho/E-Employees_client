import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

import employeeReducer from "./slices/employeeSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore(
    {
        reducer: {
            employeeReducer
        },
        middleware: [ sagaMiddleware ]
    }
)

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store