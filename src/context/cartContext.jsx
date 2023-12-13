import { createContext , useEffect , useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ( {children} ) => {
    const [cart , setCart] = useState([]);


const addItemCart = (item , quantity) =>{
    const itemAdded ={...item , quantity};

    const newCart = [...cart];
    const isInCart = newCart.find((product) => product.id === itemAdded.id)

    if(isInCart){
        isInCart.quantity += quantity
        setCart(newCart);
    }
    else{
        newCart.push(itemAdded);
        setCart(newCart)
    }
    
}

 const quantityInCart = () => {
    return cart.reduce((acc , item) => acc + item.quantity, 0)
 }

 const emptyCart = () => {
    setCart([]);
 }

const objectValue = {
    cart,
    addItemCart,
    quantityInCart,
    emptyCart

}

return <CartContext.Provider value={objectValue}>{children}</CartContext.Provider>
}