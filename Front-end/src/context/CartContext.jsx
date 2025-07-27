import { useEffect } from "react"
import {CartContext} from "./cartContext.js"

export default function CartState ({children} )  {

async function AddToCart () {
    const url = `http://localhost:5000/cart`

    try{
        const res = await fetch(url,
            {method:'POST'}
        )

        const data = await res.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

useEffect(() => {
    AddToCart()
},[])


const cart = "cart"
    return (

        <>
    <CartContext.Provider value={{cart}}>
{children}
    </CartContext.Provider>
</>
    )
}
