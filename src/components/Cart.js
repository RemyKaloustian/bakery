import React from "react";
import { connect } from 'react-redux';
import CartItem from "./CartItem";
import { cleanRemovedItems } from '../actions/actions';
import debug from '../utils/debug';
import NavbarMenu from "./NavbarMenu";
import CartAddressSelection from "./CartAddressSelection";
import CartFinalizeOrderModal from "./CartFinalizeOrderModal";

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
          {this.props.cart.length > 0 ?
            this.props.cart.map(function(item, index){
            return <CartItem {...item}/>
          })
          :
            <p>Your cart is empty :(</p>
          }
        </div>
        <CartAddressSelection/>
        <CartFinalizeOrderModal/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    cart: state.cartReducer,
    addresses: state.addressReducer,
  };
}

const mapDispatchToProps = {
  cleanRemovedItems,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Cart)