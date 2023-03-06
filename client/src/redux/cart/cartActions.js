import { GET_ALL_PRODUCTS, ADD_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, INCREASE_SIZE, DECREASE_SIZE, DELETE_CART } from './cartTypes'


export const getAllProducts = (products) => {
    return {
        type: GET_ALL_PRODUCTS,
        payload: products
    }
}

export const addToCart = (product) => {
    return {
        type: ADD_CART,
        payload: product
    }
}

export const increaseQuantity = (i) => {
    return {
        type: INCREASE_QUANTITY,
        payload: i
    }
}

export const decreaseQuantity = (i) => {
    return {
        type: DECREASE_QUANTITY,
        payload: i
    }
}

export const increaseSize = (i) => {
    return {
        type: INCREASE_SIZE,
        payload: i
    }
}

export const decreaseSize = (i) => {
    return {
        type: DECREASE_SIZE,
        payload: i
    }
}

export const deleteCart = (i) => {
    return {
        type: DELETE_CART,
        payload: i
    }
}