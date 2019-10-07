import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Food extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.match.params.id}</p>
        <p>{this.props.food.find(x=>x.name === this.props.match.params.id).details}</p>
      </div>
    );
  }
}//class

const mapStateToProps = (state) => {
  return {
    food: state.foodReducer,
  };
}
  
export default connect(mapStateToProps, null)(withRouter(Food));