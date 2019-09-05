import React from "react";
import { toggleRemoveFromCart } from '../actions/actions';
import { connect } from 'react-redux';
import { getDisplayName } from '../utils/display';

class CartItem extends React.Component {
  
  render() {
    return (
      <div>
        {this.props.isRemoved ? 
        <div>
          <p>{this.props.name} removed, </p>
          <button onClick={()=>{this.undoRemoveFromCart()}}>Undo?</button>
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

   removeItemFromCart = () => {
    this.props.toggleRemoveFromCart(this.props.name, true); 
  }

  undoRemoveFromCart = () => {
    this.props.toggleRemoveFromCart(this.props.name, false);
  }
}//class

const mapDispatchToProps = {
  toggleRemoveFromCart,
};

export default connect(null,mapDispatchToProps)(CartItem);