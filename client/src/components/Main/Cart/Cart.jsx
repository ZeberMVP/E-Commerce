import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, decreaseQuantity, increaseQuantity, decreaseSize, increaseSize } from "../../../redux";


const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cartItems);
    useSelector(state => state.numberItems);

    let TotalCart = 0;
    items.forEach(item => {
        TotalCart += item.quantity * item.price;
    });

    const [sizes, setSizes] = useState(items.map(item => item.size));

    const handleIncreaseSize = (i) => {
        dispatch(increaseSize(i));
        const newSizes = [...sizes];
        if (newSizes < 47) {
            newSizes[i]++;
            setSizes(newSizes);
        }
    };

    const handleDecreaseSize = (i) => {
        dispatch(decreaseSize(i));
        const newSizes = [...sizes];
        if (newSizes > 37) {
            newSizes[i]--;
            setSizes(newSizes);
        }
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => {
                    return (
                        <tr key={i} i={i}>
                            <td><button style={{ cursor: "pointer" }} onClick={() => {
                                dispatch(deleteCart(i))
                            }}>X</button></td>
                            <td>{item.product_name}</td>
                            <td><img src={item.image} alt={item.product_name} style={{ width: '100px', height: '80px' }} /></td>
                            <td>{item.price} $</td>
                            <td>
                                <button style={{ margin: '2px', cursor: "pointer" }} onClick={() => handleDecreaseSize(i)}>-</button>
                                <span>{sizes[i]}</span>
                                <button style={{ margin: '2px', cursor: "pointer" }} onClick={() => handleIncreaseSize(i)}>+</button>
                            </td>
                            <td>
                                <button style={{ margin: '2px', cursor: "pointer" }} onClick={() => {
                                    dispatch(decreaseQuantity(i))
                                }}>-</button>
                                <span>{item.quantity}</span>
                                <button style={{ margin: '2px', cursor: "pointer" }} onClick={() => {
                                    dispatch(increaseQuantity(i))
                                }}>+</button>
                            </td>
                            <td><b>{item.price * item.quantity} $</b></td>
                        </tr>
                    )
                })}
                <tr>
                    <td colSpan="6" style={{ textAlign: 'right' }}>Total Price:</td>
                    <td><b>{TotalCart} $</b></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Cart

