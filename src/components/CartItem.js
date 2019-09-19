import React from 'react';
import { toggleRemoveFromCart, changeQuantity} from '../actions/actions';
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
            {getDisplayName(this.props.name)} : {this.props.qty}
            <button onClick={()=> {this.changeQuantity(1)}}>+</button>
            <button onClick={()=> {this.changeQuantity(-1)}}>-</button>
            <button onClick={()=>{this.removeItemFromCart()}}>Remove</button>
          </div>
        }
      </div>
    );
  }//render

  changeQuantity = (additionalQty) => {
    if(this.props.qty + additionalQty <= 0){
      this.props.toggleRemoveFromCart(this.props.name, true); 
    }
    else{
      this.props.changeQuantity(this.props.name, additionalQty);
    }
  }

  removeItemFromCart = () => {
    this.props.toggleRemoveFromCart(this.props.name, true); 
  }

  undoRemoveFromCart = () => {
    this.props.toggleRemoveFromCart(this.props.name, false);
  }
}//class

const mapDispatchToProps = {
  toggleRemoveFromCart,
  changeQuantity,
};

export default connect(null,mapDispatchToProps)(CartItem);