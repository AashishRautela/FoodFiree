import React from "react";
import { ITEM_IMG_CDN_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch=useDispatch();

  const handelClearCart=()=>{
    dispatch(clearCart());
  }
  return (
    <div className="cart">
      <div className="cart-top">
      <h2>Your Cart-{cartItems.length} Items</h2>
      <button className="add-btn" onClick={()=>handelClearCart()}>Clear Cart</button>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-image">
                {item?.imageId && (
                  <img
                    className="cart-item-img"
                    src={ITEM_IMG_CDN_URL + item?.imageId}
                    alt={item?.name}
                  />
                )}
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: {item.price} INR</p>
              </div>
              <button className="add-btn">Order</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
