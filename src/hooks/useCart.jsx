import { useContext } from "react";
import { CartContext } from "../context/cart";

//Crear nuestra custom hook
export const useCart = () => {
    const context = useContext(CartContext);

    if(context === undefined) {
        throw new Error("useCart debe ser usado dent de un CartProveedor");
    }

    return context;
}