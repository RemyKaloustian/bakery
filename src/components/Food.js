import React from "react";
import { withRouter } from 'react-router-dom';

class Food extends React.Component {
    
  render() {
    let PROPS = this.props;
    let HISTORY = this.props.history;
    let LOCATION = this.props.history.location;
    console.log({PROPS, HISTORY , LOCATION} );

    return (
      <div className="shopping-list">
        Food {this.props.match.params.id}
      </div>
    );
  }
}//class
  
export default withRouter(Food);