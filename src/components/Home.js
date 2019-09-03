import React from "react";
import { connect } from 'react-redux';
import FoodItem from './FoodItem'
import { Link } from 'react-router-dom'

class Home extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div className="shopping-list">
        <Link to="/cart">Cart</Link>
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
