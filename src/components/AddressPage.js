import React from "react";
import { connect } from 'react-redux';
import debug from "../utils/debug";
import { addAddress } from "../actions/actions";
class AddressPage extends React.Component {
    constructor(){
        super();
        this.state = { address: ''};
    }

  render() {
    debug.log('addresspage props', this.props);
    return (
      <div>
        Add address
        <input placeholder="address" onChange={(e)=>{this.updateAddress(e)}}/>
        <button onClick={()=> this.addAddress()}>Validate</button>
      </div>
    );
  }

  updateAddress = (e) => {
    debug.log('event', e.target.value);
    this.setState({ address: e.target.value});
  }

  addAddress = () => {
    this.props.addAddress(this.state.address);
  }
}//class

const mapDispatchToProps = {
  addAddress,
};
  
export default connect(null, mapDispatchToProps)(AddressPage);