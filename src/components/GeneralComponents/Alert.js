import React from 'react';

class Alert extends React.Component {
  constructor(){
    super();
    this.state = { isVisible: true };
  }
    
  render() {
    return (
      <div className='alert'>
      {this.state.isVisible ?
        <div>
          <p>This is an alert, Aint it true brendon?</p>
          <button onClick={()=>this.setState({isVisible: !this.state.isVisible})}>Close</button>
        </div>
        :
        ''
      }
      </div>
    );
  }
}//class
  
export default Alert;