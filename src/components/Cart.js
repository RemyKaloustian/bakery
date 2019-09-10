import React from "react";
import { connect } from 'react-redux';
import CartItem from "./CartItem";
import { cleanRemovedItems } from '../actions/actions';
import debug from '../utils/debug';
import NavbarMenu from "./NavbarMenu";
import CartAddressSelection from "./CartAddressSelection";

class Cart extends React.Component {

  constructor(){
    super();
    this.state = { hasRenderedOnce: false };
  }
  
  render() {
    if(!this.state.hasRenderedOnce){
      this.props.cleanRemovedItems();
      this.setState({ hasRenderedOnce: true });
    }

    debug.log('Cart loaded', this.props.cart);
    return (
      <div>
      <NavbarMenu/>
        <div>
          Cart
          {this.props.cart.map(function(item, index){
            return <CartItem {...item}/>;
          })}
        </div>
          <CartAddressSelection/>
        <div>
          <button>Validate</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    cart: state.cartReducer,
  };
}

const mapDispatchToProps = {
  cleanRemovedItems,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Cart)