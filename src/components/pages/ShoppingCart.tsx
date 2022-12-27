//THIS ONE IS TSX INSTEAD OF JS.  WE SHOULD USE IT IF WE CAN FIGURE IT OUT





// import { createContext, ReactNode, useContext, useState} from "react"

// type ShoppingCartProviderProps = {
//   children: ReactNode
// }

// type CartItem = {
//   id: number
//   quantity: number
// }

// type ShoppingCart = {
//   getItemQuantity: (id: number) => number
//   increaseCartQuantity: (id: number) => void
//   decreaseCartQuantity: (id: number) => void
//   removeFromCart: (id: number) => void
// }

// const ShoppingCart = createContext({})

// export function useShoppingCart() {
//   return useContext(ShoppingCart)
// }
// export function ShoppingCartProvider({ children }:
//   ShoppingCartProviderProps) {
//     const [cartItems, setCartItems] = useState<CartItem[]>([])
    
//     function getItemQuantity(id: number) {
//       return cartItems.find(item => item.id ===id)?.quantity || 0)
//     }
    
//     function increaseCartQuantity(id: number) {
//         setCartItems(currItems => {
//             if (currItems.find(item => item.id === id) == null) {
//                 return [...currItems, { id, quantity: 1}]
//             } else {
//                 return currItems.map(item => {
//                     if (item.id === id) {
//                         return {...item, quantity: item.quantity + 1 }
//                     } else {
//                         return item
//                     }
//                 })
//             }    
//         })
//     }    

//     function decreaseCartQuantity(id: number) {
//         setCartItems(currItems => {
//             if (currItems.find(item => item.id === id)?.quantity === 1) {
//                 return currItems.filter(item => item.id !== id)
//             } else {
//                 return currItems.map(item => {
//                     if (item.id === id) {
//                         return {...item, quantity: item.quantity - 1 }
//                     } else {
//                         return item
//                     }
//                 })
//             }    
//         })
//     }    
    
//     function removeFromCart(id: number) {
//         setCartItems(currItems => {
//             return currItems.filter(item => item.id !== id)
//         })
//     }

//     return (
//       <ShoppingCart.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
//         {children}
//       </ShoppingCart.Provider>
//     )
//   }




