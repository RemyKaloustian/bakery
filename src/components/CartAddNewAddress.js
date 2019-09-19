import React from 'react';
import { connect } from 'react-redux';
import { addAddress } from '../actions/actions';
import { MIN_ADDRESS_LENGTH } from '../utils/constants';
import '../style/CartAddNewAddress.css';

class CartAddNewAddress extends React.Component {

  modalVisibleId = 'new_address_modal_visible';
  modalHiddenId = 'new_address_modal_hidden';

  constructor(){
    super();
    this.state = { 
      inputValue: '',
      address: '', 
      currentModalVisibility: this.modalHiddenId,
    };
}
  render() {
    return (
      <div>
        <button onClick={()=> this.toggleModalVisibility()}>Add new address</button>
        <div id={this.state.currentModalVisibility} className='new_address_modal'>
          <p>New address</p>
          <input placeholder='address' 
            value = {this.state.address}
            onChange={(e)=>{this.updateAddress(e)}}/>
          <button onClick={()=> this.addAddress()}>Validate</button>
          <button onClick={()=> this.closeModal()}>Cancel</button>
        </div>
      </div>
    );
  }

  toggleModalVisibility = () => {
    const newModalId = this.state.currentModalVisibility === this.modalHiddenId ? this.modalVisibleId : this.modalHiddenId;
    this.setState({ 
      currentModalVisibility: newModalId});
  }

  updateAddress = (e) => {
    this.setState({ address: e.target.value, inputValue: e.target.value});
  }

  addAddress = () => {
    if(this.state.address.trim().length > MIN_ADDRESS_LENGTH){
      this.props.addAddress(this.state.address);
      this.closeModal();
    }
  }

  closeModal = () => {
    this.setState({ address: ''});
    this.toggleModalVisibility();
  }
}//class

const mapDispatchToProps = {
  addAddress,
};
  
export default connect(null, mapDispatchToProps)(CartAddNewAddress);