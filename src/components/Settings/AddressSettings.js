import React from "react";
import { connect } from 'react-redux';
import SettingsPageAddress from "./SettingsPageAddress";

class AddressSettings extends React.Component {
    
  render() {
    return (
      <div>
        Address settings
        {this.props.addresses.map(function(item, index){
            return <SettingsPageAddress address={item.address}/>
        })}
      </div>
    );
  }
}//class

function mapStateToProps(state){
    return {
      addresses: state.addressReducer,
    };
  }
  
export default connect(mapStateToProps, null)(AddressSettings);