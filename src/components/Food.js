import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavbarMenu from './GeneralComponents/NavbarMenu';
import { addToCart } from '../actions/cartActions';

class Food extends React.Component {
  render() {
    return (
      <div>
      <NavbarMenu/>
        <p>{this.props.match.params.id}</p>
        <p>{this.props.food.find(x=>x.name === this.props.match.params.id).details}</p>
        <button 
          onClick={()=> this.props.addToCart(this.props.match.params.id)}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}//class

const mapStateToProps = (state) => {
  return {
    food: state.foodReducer,
  };
}

const mapDispatchToProps = {
  addToCart,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Food));