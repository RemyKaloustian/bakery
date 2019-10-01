import React from "react";
import { connect } from 'react-redux';
import SettingsPageAddress from "./SettingsPageAddress";
import Modal from "../GeneralComponents/Modal";
import { SETTINGS_ADDRESS_REMOVAL_MODAL } from "../../utils/modalsConstants";

class SettingsPageAddressSection extends React.Component {
    
  render() {
    return (
      <div>
        Address settings
        {this.props.addresses.map(function(item, index){
            return <SettingsPageAddress address={item.address}/>
        })}
        <Modal
          modalId={SETTINGS_ADDRESS_REMOVAL_MODAL}
          title={'Are you sure you want to delete this address?'}
        />
      </div>
    );
  }
}//class

const mapStateToProps = (state) => {
    return {
      addresses: state.addressReducer,
    };
  }
  
export default connect(mapStateToProps, null)(SettingsPageAddressSection);