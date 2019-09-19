import React from "react";
import { connect } from 'react-redux';
import CartAddress from "./CartAddress";
import CartAddNewAddress from "./CartAddNewAddress";

class CartAddressSelection extends React.Component {

  render() {
    return (
      <div>
        Select Address
        {this.props.addresses.length > 0 ?
          this.props.addresses.map(function(item, index){
            return <CartAddress {...item}/>;
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
  return {
    addresses: state.addressReducer,
  };
}  

export default connect(mapStateToProps)(CartAddressSelection);