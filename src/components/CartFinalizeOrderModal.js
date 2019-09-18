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
        <div className ={`cart_finalize_modal ${this.props.modals.find(x=>x.id === this.modalId).displayClass}`}>
          Order summary
          <div>
              Order content:
              {this.displayItems()}
          </div>
          <div>
              The order will go to:
              {this.displayAddresses()}
          </div>
          <button onClick={()=> this.closeModal()}>
            Edit order
          </button>
          <button 
            disabled={!((this.props.cart.find(x=>x.isRemoved === false) !== undefined) && 
            (this.props.addresses.find(x=>x.isSelected) !== undefined))}>
            Validate order
          </button>
        </div>
        <div>
          <button onClick={()=> this.props.toggleModalVisibility(this.modalId)}>
            Validate
          </button>
        </div>
      </div>
    );
  }

  displayItems = () => {
    this.props.cart.map(function(item, index){
      return item.isRemoved ? null : <p>{item.name}</p>;
    });
  }

  displayAddresses= () => {
    this.props.addresses.map(function(item, index){
      return item.isSelected ? <p>{item.address}</p> : null;
    });
  }

  closeModal = () => {
      this.props.toggleModalVisibility(this.modalId);
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
  