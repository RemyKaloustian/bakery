import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { addOrder, emptyCart,  } from '../../actions/cartActions';
import { toggleModal } from '../../actions/modalsActions';
import { CART_FINALIZE_ORDER_MODAL } from '../../utils/modalsConstants';
import Modal from '../GeneralComponents/Modal';
import '../../style/modals.css';

class CartFinalizeOrderModal extends React.Component {
  modalId = CART_FINALIZE_ORDER_MODAL;
 
  render() {
    return (
     
      <div> 
        <Modal
          modalId={this.modalId}
          title={'Finalize order'}
        >
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
          <button onClick={()=> this.props.toggleModal(this.modalId)}>
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
         </Modal>        
        <div>
          <button onClick={()=> this.props.toggleModal(this.modalId)}>
            Validate
          </button>
        </div>
      </div>
    );
  }

  validateOrder = () => {
    this.props.toggleModal(this.modalId);
    this.props.addOrder(
      this.props.cart.filter(x=>x.isRemoved === false),
      this.props.addresses.filter(x=>x.isSelected === true)
    );
    this.props.emptyCart();
  }
}//class

const mapStateToProps = (state) => {
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
  