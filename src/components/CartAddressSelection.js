import React from "react";
import { connect } from 'react-redux';
import debug from "../utils/debug";
import CartAddress from "./CartAddress";
import CartAddNewAddress from "./CartAddNewAddress";

class CartAddressSelection extends React.Component {

  render() {
    debug.log('addresses in cart selection', this.props);
    return (
      <div>
        Select Address
        {this.props.addresses.length > 0 ?
          this.props.addresses.map(function(item, index){
            return <CartAddress address={item}/>;
          })
        :
        <p>No adresses available</p>
        }
        <CartAddNewAddress/>
      </div>
    );
  }
}//class

function mapStateToProps(state){
  debug.log('in cartaddressselection', state);
  return {
    addresses: state.addressReducer,
  };
}  

export default connect(mapStateToProps)(CartAddressSelection);