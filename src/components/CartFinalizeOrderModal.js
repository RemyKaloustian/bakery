import React from "react";
import { connect } from 'react-redux';
import debug from '../utils/debug';

class CartFinalizeOrderModal extends React.Component {
    
  render() {
      debug.log('in CartFinalizeOrderModal', this.props);
    return (
      <div>
        Order summary
        <div>
            Order content:
            {this.props.cart.map(function(item, index){
              return item.isRemoved ? null : <p>{item.name}</p>;
            })}
        </div>
        <div>
            The order will go to:
            {this.props.addresses.map(function(item, index){
              return item.isSelected ? <p>{item.address}</p> : null;
            })}
        </div>
        <button>Edit order</button>
        <button>Validate order</button>
      </div>
    );
  }
}//class


function mapStateToProps(state){
    return {
      cart: state.cartReducer,
      addresses: state.addressReducer,
    };
  }

export default connect(mapStateToProps)(CartFinalizeOrderModal);
  