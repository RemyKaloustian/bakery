import React from 'react';
import { connect } from 'react-redux';
import FoodItem from './FoodItem';
import NavbarMenu from '../GeneralComponents/NavbarMenu';

class Home extends React.Component {

  render() {
    return (
      <div>
        <NavbarMenu/>
        {this.props.food.map(function(foodItem, index){
          return <FoodItem name={foodItem.name}/>;
        })}
      </div>
    );
  }
}//class

const mapStateToProps = (state) => {
  return {
    food: state.foodReducer,
  };
}
  
export default connect(mapStateToProps, null)(Home)