import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cartReducer from './cart/cartReducer';

const store = configureStore({
    reducer: cartReducer,
    middleware: [logger]
});

export default store;