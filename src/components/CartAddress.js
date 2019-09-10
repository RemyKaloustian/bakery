import React from "react";
import { connect } from 'react-redux';
import debug from "../utils/debug";

class CartAddress extends React.Component {

  render() {
    debug.log('addresses in cart selection', this.props);
    return (
      <div>
       {this.props.address}
      </div>
    );
  }
}//class

export default CartAddress;