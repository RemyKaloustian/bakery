import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NavbarMenu extends React.Component {

  render() {
    return (
      <div >
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart({this.props.cart.length})</Link>
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
      cart: state.cartReducer,
    };
  }
  
export default connect(mapStateToProps)(NavbarMenu);

