import React,{Component} from "react";
import data from "./data.json";
import Product from "./Components/Product.js";
import Filter from "./Components/Filter.js";
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
  sortProducts=(event)=>{
    const sort=event.target.value;
    console.log("this event "+event.target.value);
    this.setState({
      sort:sort,
      products:this.state.products.slice().sort((a,b)=>{
        return(
          sort === "lowest" ? a.price>b.price? 1:-1
          :sort ==="highest"? a.price<b.price? 1:-1
          : a._id>b._id ? 1:-1)
      }),
    })

  }
  filterProducts=(event)=>{
    console.log("this event filter "+event.target.value);
    if(event.target.value===""){
      this.setState({
        size:event.target.value,
        product:data.products
      });
    }else{
      this.setState({
        size:event.target.value,
        products:data.products.filter(
          (product)=>product.availablesSizes.indexOf(event.target.value)>=0)
      });
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
                <Filter count={this.state.products.length}
                  size={this.state.size}
                  sort={this.state.sort}
                  filterProducts={this.filterProducts}
                  sortProducts={this.sortProducts}
                />
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
