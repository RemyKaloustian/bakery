import React from 'react';
import { withRouter } from 'react-router-dom';

class Food extends React.Component {
  render() {
    return (
      <div>
        Food {this.props.match.params.id}
      </div>
    );
  }
}//class
  
export default withRouter(Food);