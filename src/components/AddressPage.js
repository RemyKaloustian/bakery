import React from 'react';
import { connect } from 'react-redux';
import { addAddress } from '../actions/actions';

class AddressPage extends React.Component {
  constructor(){
    super();
    this.state = { address: ''};
  }

  render() {
    return (
      <div>
        Add address
        <input placeholder='address' onChange={(e)=>{this.updateAddress(e)}}/>
        <button onClick={()=> this.addAddress()}>Validate</button>
      </div>
    );
  }

  updateAddress = (e) => {
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