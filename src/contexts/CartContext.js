import React, { createContext, useState } from 'react';


//create context
export const CartContext=createContext()

const CartProvider = ({children}) => {
  //cart state
  const [cart,setCart] =useState([])
  //add to cart
  const addToCart=(product,id)=>{
    const newItem={...product,amount:1};
    //check if the item already in cart
    const cartItem=cart.find((item)=>{
      return item.id===id;
    });
    //if cart item is already in the cart
    if (cartItem){
      const newCart=[...cart].map((item)=>{
        if(item.id===id){
          return {...item,amount:cartItem.amount+1};
        }
      });
      setCart(newCart)
      }
      else{
        setCart([...cart,newItem]);
      }
    };

//remove from cart
const removeFromCart = (id) =>{
  const newCart = cart.filter((item)=>{
    return item.id!==id;
  });
  setCart(newCart);
}

const clearCart =()=>{
  setCart([]);};

const increaseAmount = (id) =>{
  const item=cart.find((item)=>item.id ===id);
  addToCart(item,id);
};

  return (<CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,increaseAmount}}>{children}</CartContext.Provider>);
};


export default CartProvider;
