import React from "react";
import { connect } from 'react-redux';
import debug from '../utils/debug';
import { toggleModalVisibility } from '../actions/actions';
import { CART_FINALIZE_ORDER_MODAL } from "../utils/modalsConstants";
import '../style/modals.css';

class CartFinalizeOrderModal extends React.Component {
  modalId = CART_FINALIZE_ORDER_MODAL;

  render() {
    debug.log('in CartFinalizeOrderModal', this.props);
    return (
      <div>
        <div className ={this.props.modals.find(x=>x.id === this.modalId).displayClass}>
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
        <div>
          <button onClick={()=> this.props.toggleModalVisibility(this.modalId)}>
            Validate
          </button>
        </div>
      </div>
    );
  }
}//class


function mapStateToProps(state){
  return {
    cart: state.cartReducer,
    addresses: state.addressReducer,
    modals: state.modalsReducer,
  };
}

  
const mapDispatchToProps = {
  toggleModalVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartFinalizeOrderModal);
  