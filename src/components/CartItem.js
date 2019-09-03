import React from "react";
import { removeFromCart } from '../actions/actions';
import { connect } from 'react-redux';
import { getDisplayName } from '../utils/display';

class CartItem extends React.Component {

  constructor(){
    super()
      this.state = {
        isDisplayed: true,
      }
  }

  render() {
    return (
      <div>
        {this.state.isDisplayed > 0 &&
          <div>
            {getDisplayName(this.props.name)}
            <button onClick={()=>{this.removeItemFromCart()}}>Remove</button>
          </div>
        }
      </div>
    );
  }//render

  removeItemFromCart(){
    this.setState({isDisplayed: false});
    this.props.removeFromCart(this.props.name);
  }
}//class

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(null,mapDispatchToProps)(CartItem);