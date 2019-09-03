import React from "react";
import { removeFromCart } from '../actions/actions';
import { connect } from 'react-redux';

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
            {this.getDisplayName(this.props.name)}
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

  getDisplayName(name){
    return name.replace(/-/g, " ");
  }
}//class

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(null,mapDispatchToProps)(CartItem);