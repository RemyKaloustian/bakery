import React from "react";
import { connect } from 'react-redux';
import debug from "../utils/debug";
import { selectAddressForOrder, removeAddressFromOrder, toggleAddressSelectionInOrder } from "../actions/actions";

class CartAddress extends React.Component {

  constructor(props){
    super(props);
    this.state = {isChecked: this.props.isSelected};
  }

  render() {
    debug.log('addresses in cart selection', this.props);
    return (
      <div>
        <input checked={this.state.isChecked} type="checkbox" onChange={() => this.toggleAddressPresence()}/> 
       {this.props.address}
      </div>
    );
  }

  toggleAddressPresence = () => {
    const newIsChecked = this.state.isChecked ? false : true;
    this.setState({ isChecked: newIsChecked}, ()=>{
      debug.log('in cartaddress', this.state.isChecked);
      if(this.state.isChecked){
        // this.props.selectAddressForOrder(this.props.address);
        this.props.toggleAddressSelectionInOrder(this.props.address, this.state.isChecked);
      }
      else{
        // this.props.removeAddressFromOrder(this.props.address);
        this.props.toggleAddressSelectionInOrder(this.props.address, this.state.isChecked);
      }
    });
  }
}//class


const mapDispatchToProps = {
  selectAddressForOrder,
  removeAddressFromOrder,
  toggleAddressSelectionInOrder,
};
  

export default connect(null, mapDispatchToProps)(CartAddress);