import React from "react";
import { connect } from 'react-redux';
import FoodItem from './FoodItem';
import NavbarMenu from './NavbarMenu';

class Home extends React.Component {

  render() {
    return (
      <div>
        <NavbarMenu/>
        {this.props.food.map(function(name, index){
          return <FoodItem name={name}/>;
        })}
      </div>
    );
  }
}//class

//When you want something from the store,
// use mapStateToProps
// choose the reducer from which you want to choose
// select the data (in this case 'food') from the props (see 'render()')
function mapStateToProps(state){
  return {
    food: state.foodReducer,
  };
}

export default connect(mapStateToProps)(Home)
