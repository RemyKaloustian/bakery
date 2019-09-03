import React from "react";
import { withRouter } from 'react-router-dom';
import { addToCart } from '../actions/actions';
import { connect } from 'react-redux';

class FoodItem extends React.Component {

  render() {
    return (
      <div>
        <p onClick={()=>{this.onClick()}}>
          {this.getDisplayName(this.props.name)}
        </p>
        <button onClick={()=>{this.addItemToCart()}}>Add to Cart</button>
      </div>
    );
  }//render

  addItemToCart(){
    this.props.addToCart(this.props.name);
  }

  onClick(){
    console.log(this.props);
    console.log("Clicked "+ this.props.name);
    this.props.history.push(`/food/${this.props.name}`);
  }

  getDisplayName(name){
    return name.replace(/-/g, " ");
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