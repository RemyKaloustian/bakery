import React from "react";
import { connect } from 'react-redux';
import debug from "../utils/debug";
import { addAddressToOrder, removeAddressFromOrder } from "../actions/actions";

class CartAddress extends React.Component {

  constructor(){
    super();
    this.state = {isChecked: false};
  }

  render() {
    debug.log('addresses in cart selection', this.props);
    return (
      <div>
        <input type="checkbox" onChange={() => this.toggleAddressPresence()}/> 
       {this.props.address}
      </div>
    );
  }

  toggleAddressPresence = () => {
    const newIsChecked = this.state.isChecked ? false : true;
    this.setState({ isChecked: newIsChecked}, ()=>{
      debug.log('in cartaddress', this.state.isChecked);
      if(this.state.isChecked){
        this.props.addAddressToOrder(this.props.address);
      }
      else{
        this.props.removeAddressFromOrder(this.props.address);
      }
    });
  }
}//class


const mapDispatchToProps = {
  addAddressToOrder,
  removeAddressFromOrder,
};
  

export default connect(null, mapDispatchToProps)(CartAddress);