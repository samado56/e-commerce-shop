import {CartContext} from "./cartContext.js"

export default function CartState ({children} )  {




const cart = "cart"
    return (

        <>
    <CartContext.Provider value={{cart}}>
{children}
    </CartContext.Provider>
</>
    )
}
