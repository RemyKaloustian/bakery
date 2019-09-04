import React from "react";
import { connect } from 'react-redux';
import CartItem from "./CartItem";
import debug from '../utils/debug';

class Cart extends React.Component {
  render() {
    debug.log('Cart loaded', this.props.cart);
    return (
      <div className="shopping-list">
        Cart
        {this.props.cart.map(function(item, index){
          debug.log('Creating a Cartitem for ', item.name);
          return <CartItem name={item.name} isRemoved={item.isRemoved}/>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    cart: state.cartReducer,
  };
}
  
export default connect(mapStateToProps)(Cart)