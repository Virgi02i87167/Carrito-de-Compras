import { useId } from "react";
import {CartIcon, ClearCartIcon} from "./Icon";
import "./Cart.css";
import { useCart } from "../hooks/useCart";
import { Products } from "./Products";

function CartItem({thumbnail, title, price, quantity, addToCart }) {
    return(
        <li>
            <img 
                src={thumbnail} 
                alt={title} />
            <div>
               <strong>{title}</strong> -${price}
            </div>
            <footer>
                <small>Qty: { quantity }</small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}
export function Cart () {
    const cartCheckboxId = useId();

    const {cart, clearCart, addToCart} = useCart();

    const totalquantity = cart.reduce(
        (quantityTotal, item) => quantityTotal + item.quantity, 0
    );

    const totalPrice = cart.reduce(
        (priceTotal, item) => priceTotal + (item.price * item.quantity), 0).toFixed(2);

    return(
        <>
            <label className="cart-button" htmlFor={ cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden/>

            <aside className="cart">
                <ul>
                    {
                        cart.map( product => (
                            <CartItem 
                                key={product.id}
                                addToCart = { () => addToCart(product)}
                                { ...product}
                            />
                        ))
                    }
                </ul>

                <p>Productos: {totalquantity} </p>
                <p>Total pagar: ${totalPrice}</p>
                
                <button style={{backgroundColor: '#E36414' }} onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}