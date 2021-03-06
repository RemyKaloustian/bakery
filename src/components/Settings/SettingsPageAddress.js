import React from "react";
import { connect } from 'react-redux';
import { updateAddress, removeAddress } from "../../actions/addressActions";
import { toggleModal, updateOnValidateModal } from "../../actions/modalsActions";
import { MIN_ADDRESS_LENGTH } from "../../utils/constants";
import { SETTINGS_ADDRESS_REMOVAL_MODAL } from "../../utils/modalsConstants";

class SettingsPageAddress extends React.Component {
  constructor(props){
    super(props);
    this.state = { isOnEdit: false, editedAddress: this.props.address };
  }

  render() {
    return (
      <div>
      {this.state.isOnEdit ?
        <div>
          <input value={this.state.editedAddress}
            onChange={(e) => this.setEditedAddress(e)}
          />
          <button onClick={()=> this.updateAddress()}>Update</button>
        </div>
      :
        <div>
          {this.props.address}
          <button onClick={()=> this.toggleIsOnEdit()}>Edit</button>
          <button onClick={()=> this.removeAddress()}>Remove</button>
        </div>
      }      
      </div>
    );
  }

  toggleIsOnEdit = () => {
    this.setState({ isOnEdit: !this.state.isOnEdit });
  }

  setEditedAddress = (e) => {
    this.setState({ editedAddress: e.target.value });
  }

  updateAddress = () => {
    if(this.state.editedAddress.length > MIN_ADDRESS_LENGTH){
      this.toggleIsOnEdit();
      this.props.updateAddress(this.props.address, this.state.editedAddress);
    }
  }

  removeAddress = () => {
    this.props.toggleModal(SETTINGS_ADDRESS_REMOVAL_MODAL);
    let removeAddressObject = { action: ()=>{
      this.removinForReal();
    }} 
    this.props.updateOnValidateModal(SETTINGS_ADDRESS_REMOVAL_MODAL, removeAddressObject);
  }

  removinForReal = () => {
    this.props.removeAddress(this.props.address);
  }
}//class

const mapDispatchToProps = {
  updateAddress,
  toggleModal,
  updateOnValidateModal,
  removeAddress,
};
  
export default connect(null, mapDispatchToProps)(SettingsPageAddress);