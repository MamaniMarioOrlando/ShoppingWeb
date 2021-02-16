import React,{Component} from "react";
import data from "./data.json";
import Product from "./Components/Product.js";
// feature 1
class  App extends React.Component{

  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:"",
    }
  }
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
      </header>
        <main>
          <div className="content">
              <div className="main">
                <Product products={this.state.products}/>
              </div>
              <div className="sidebar">
                Cart items
              </div>
          </div>
        </main>
        <footer>
          All right is reserved
        </footer>
      </div>
      );
    }
}

export default App;
