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
          <p>{this.props.message}</p>
          <button onClick={()=>this.setState({isVisible: !this.state.isVisible})}>{this.props.buttonName}</button>
        </div>
        :
        ''
      }
      </div>
    );
  }
}//class
  
export default Alert;