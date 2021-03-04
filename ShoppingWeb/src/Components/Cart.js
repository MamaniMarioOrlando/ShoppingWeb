import React,{Component} from "react";
import formatCurrency from "../util.js";
class Cart extends React.Component{
    render(){
        const {cartItems}=this.props;
        return(
            <div>
                {
                    cartItems.length===0?(<div className="cart cart-header">Cart is empty</div>)
                    :(<div className="cart cart-header">you have {cartItems.length}{" "}</div>)
                }
                <div>
                <div className="cart">
                    <ul className="cart cart-items">
                        {
                            cartItems.map(item=>{
                                return(<li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title}></img>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            {formatCurrency(item.price)} x {item.count}{" "}
                                            <button className="button" onClick={()=>{this.props.removeFromCart(item)}}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </li>)
                            })
                        }
                    </ul>
                </div>
                {
                    cartItems.length!==0&&(
                        <div className="cart">
                            <div className="total">
                                <div>
                                    total:{" "} {formatCurrency(
                                        cartItems.reduce((a,c)=> a+c.price*c.count,0))}
                                </div>
                                <button className="button primary">Proceed</button>
                            </div>
                        </div>
                    )
                }
                </div>                
            </div>

        );
    }
}
export default Cart;