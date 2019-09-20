import React from 'react';
import { connect } from 'react-redux';
import FoodItem from './FoodItem';
import NavbarMenu from './NavbarMenu';
import { getFood } from '../database/foodDatabase';

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavbarMenu/>
        {getFood().map(function(name, index){
          return <FoodItem name={name}/>;
        })}
      </div>
    );
  }
}//class

export default Home
