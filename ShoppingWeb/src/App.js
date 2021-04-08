import React,{Component} from "react";
import Product from "./Components/Product.js";
import Filter from "./Components/Filter.js";
import Cart from "./Components/Cart.js";
import {Provider} from "react-redux"
import store from "./store";
// feature 1
class  App extends React.Component{

  constructor(){
    super();
    this.state={
      cartItems: localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
    }
  }
  createOrder=(order)=>{
    alert("Need to save order for "+order.name);
  }

  removeFromCart=(product)=>{
    const cartItems=this.state.cartItems.slice();
    this.setState({
      cartItems:cartItems.filter((x)=>x._id!==product._id),
    });
    localStorage.setItem("cartItems",JSON.stringify(cartItems.filter((x)=>x._id!==product._id)));
  }

  addToCart=(product)=>{
    const cartItems=this.state.cartItems.slice();
    let alreadyInCart=false;
    cartItems.forEach(item=>{
      if(item._id===product._id){ 
        item.count++;
        alreadyInCart=true;
      }   
    });
    if(!alreadyInCart){
      cartItems.push({...product,count:1})
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    console.log(localStorage.getItem("cartItems"));
  }
  render(){
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
      </header>
        <main>
          <div className="content">
              <div className="main">
                <Filter></Filter>
                <Product addToCart={this.addToCart}/>
              </div>
              <div className="sidebar">
                <Cart 
                cartItems={this.state.cartItems} 
                removeFromCart={this.removeFromCart}
                createOrder={this.createOrder}/>
              </div>
          </div>
        </main>
        <footer>
          All right is reserved
        </footer>
      </div>
      </Provider>
      );
    }
}

export default App;
