import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-4 m-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList Items={cartItems} />
      </div>
      {cartItems.length == 0 ? (
        <h1>Your Cart is Empty!!! Please Add some Items</h1>
      ) : (
        <button
          className="text-center p-2 m-2 rounded-md border bg-black text-white"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      )}
    </div>
  );
};

export default Cart;
