import React from "react";
import { withRouter } from 'react-router-dom';
import { addToCart } from '../actions/actions';
import { connect } from 'react-redux';
import { getDisplayName } from '../utils/display';

class FoodItem extends React.Component {

  render() {
    return (
      <div>
        <p onClick={()=>{this.onClick()}}>
          {getDisplayName(this.props.name)}
        </p>
        <button onClick={()=>{this.addItemToCart()}}>Add to Cart</button>
      </div>
    );
  }//render

  addItemToCart(){
    this.props.addToCart(this.props.name);
  }

  onClick(){
    this.props.history.push(`/food/${this.props.name}`);
  }
}//class

const mapDispatchToProps = {
  addToCart,
};

const FoodItemContainer = connect(
  null,
  mapDispatchToProps
)(FoodItem);

export default withRouter(FoodItemContainer);