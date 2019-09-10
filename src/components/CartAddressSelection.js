import React from "react";
import { connect } from 'react-redux';
import debug from "../utils/debug";
import CartAddress from "./CartAddress";
import { Link } from 'react-router-dom';

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
        <Link to="/address" params={{ testvalue: "hello" }}>Add address</Link>
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