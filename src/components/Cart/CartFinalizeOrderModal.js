import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { addOrder, emptyCart, toggleModal } from '../../actions/actions';
import { CART_FINALIZE_ORDER_MODAL } from '../../utils/modalsConstants';
import '../../style/modals.css';

class CartFinalizeOrderModal extends React.Component {
  modalId = CART_FINALIZE_ORDER_MODAL;
 
  render() {
    return (
      <div>
        <div className ={`cart_finalize_modal ${this.props.modals.find(x=>x.id === this.modalId).displayClass}`}>
          Order summary
          <div>
              Order content:
              {this.props.cart.map(function(item, index){
                return item.isRemoved ? null : <p>{item.name}: {item.qty}</p>;
              })}
          </div>
          <div>
              The order will go to:
              { this.props.addresses.map(function(item, index){
                return item.isSelected ? <p>{item.address}</p> : null;
              })}
          </div>
          <button onClick={()=> this.closeModal()}>
            Edit order
          </button>
          <Route render={({ history}) => (
            <button
              disabled={!((this.props.cart.find(x=>x.isRemoved === false) !== undefined) && 
              (this.props.addresses.find(x=>x.isSelected) !== undefined))}

              onClick={() => { this.validateOrder(); history.push({
                pathname: '/orders',
                state: { hasNewOrder: true }}) 
                }}
            >
              Validate order
            </button>
            )} />          
        </div>
        <div>
          <button onClick={()=> this.props.toggleModal(this.modalId)}>
            Validate
          </button>
        </div>
      </div>
    );
  }

  validateOrder = () => {
    this.closeModal();
    this.props.addOrder(
      this.props.cart.filter(x=>x.isRemoved === false),
      this.props.addresses.filter(x=>x.isSelected === true)
    );
    this.props.emptyCart();
  }

  closeModal = () => {
    this.props.toggleModal(this.modalId);
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
  toggleModal,
  addOrder,
  emptyCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartFinalizeOrderModal);
  