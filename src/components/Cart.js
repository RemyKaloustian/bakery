import React from "react";
import { connect } from 'react-redux';
import CartItem from "./CartItem";
import { cleanRemovedItems } from '../actions/actions';
import debug from '../utils/debug';

class Cart extends React.Component {

  constructor(){
    super();
    this.state = {hasRenderedOnce: false};
  }
  
  render() {
    if(!this.state.hasRenderedOnce){
      this.props.cleanRemovedItems();
      this.setState({hasRenderedOnce: true});
    }

    debug.log('Cart loaded', this.props.cart);
    return (
      <div className="shopping-list">
        Cart
        {this.props.cart.map(function(item, index){
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

const mapDispatchToProps = {
  cleanRemovedItems,
};

  
export default connect(mapStateToProps, mapDispatchToProps)(Cart)