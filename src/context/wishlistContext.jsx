import React, { createContext, useState } from 'react'
import useLocalStorage from '../hook/LocalStorage'

export const WishlistContext = createContext()
function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useLocalStorage("wishlist",[])
    function addWishlist(item) {
        const index  = wishlist.findIndex((x)=>x._id === item._id)
        if (index === -1) {
            setWishlist([...wishlist,item])
        }
        else{
            removeWishlist(item)
        }
    }
    function removeWishlist(item) {
        setWishlist(wishlist.filter((x)=> x._id !== item._id))
    }

    function isWishlist(item) {
        return wishlist.findIndex((x)=> x._id === item ._id) === -1 ?false :true
    }
  return (
    <WishlistContext.Provider value={{wishlist,addWishlist,isWishlist}}>{children}</WishlistContext.Provider>
  )
}

export default WishlistProvider