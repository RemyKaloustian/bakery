import React from "react";
import { connect } from 'react-redux';
import { toggleAddressSelectionInOrder } from "../actions/actions";

class CartAddress extends React.Component {

  constructor(props){
    super(props);
    this.state = {isChecked: this.props.isSelected};
  }

  render() {
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
      if(this.state.isChecked){
        this.props.toggleAddressSelectionInOrder(this.props.address, this.state.isChecked);
      }
      else{
        this.props.toggleAddressSelectionInOrder(this.props.address, this.state.isChecked);
      }
    });
  }
}//class


const mapDispatchToProps = {
  toggleAddressSelectionInOrder,
};
  
export default connect(null, mapDispatchToProps)(CartAddress);