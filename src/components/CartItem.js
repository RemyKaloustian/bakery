import React from "react";
import { removeFromCart } from '../actions/actions';
import { connect } from 'react-redux';
import { getDisplayName } from '../utils/display';
import  debug  from '../utils/debug';

class CartItem extends React.Component {
  
  render() {
    debug.log('Cartitem.render, isRemoved = ', this.props.isRemoved);
    return (
      <div>
        {this.props.isRemoved ? 
        <div>
          <p>{this.props.name} removed, </p>
          <button>Undo?</button>
        </div>
        : 
        <div>
          {getDisplayName(this.props.name)}
          <button onClick={()=>{this.removeItemFromCart()}}>Remove</button>
        </div>
        }
      </div>
    );
  }//render

   removeItemFromCart= () => {
    debug.log('in CartItem, Removing', this.props.name);
    this.props.removeFromCart(this.props.name); 
  }
}//class

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(null,mapDispatchToProps)(CartItem);