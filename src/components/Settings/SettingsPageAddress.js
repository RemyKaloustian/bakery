import React from "react";
import { connect } from 'react-redux';
import { updateAddress } from "../../actions/actions";
import { MIN_ADDRESS_LENGTH } from "../../utils/constants";

class SettingsPageAddress extends React.Component {
  constructor(){
    super();
    this.state = { isOnEdit: false, editedAddress: '' };
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
}//class

const mapDispatchToProps = {
  updateAddress,
};
  
export default connect(null, mapDispatchToProps)(SettingsPageAddress);