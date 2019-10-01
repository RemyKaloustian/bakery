import React from 'react';
import FoodItem from './FoodItem';
import NavbarMenu from '../GeneralComponents/NavbarMenu';
import { getFoodItems } from '../../database/foodDatabase';

class Home extends React.Component {
  constructor(){
    super();
    this.state = { foodItems: [] };
    getFoodItems(this.setFoodItems);
  }

  render() {
    return (
      <div>
        <NavbarMenu/>
        {this.state.foodItems.map(function(foodItem, index){
          return <FoodItem name={foodItem.name}/>;
        })}
      </div>
    );
  }

  setFoodItems = (foodItems) => {
    this.setState({ foodItems: foodItems });
  }
}//class

export default Home