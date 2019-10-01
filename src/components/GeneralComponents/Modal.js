import React from "react";
import { connect } from 'react-redux';
import debug from '../../utils/debug';
import { addModal, toggleModal } from '../../actions/modalsActions';

class Modal extends React.Component {
  constructor(){
    super();
    this.state = { hasInitialized: false, isVisible: false };
  }

  render() {
    if(!this.state.hasInitialized){
      this.checkModalPresenceInReducer();
    }
    return (
      <div>
        {this.state.hasInitialized && this.props.modals.find(x=>x.id === this.props.modalId).isVisible ?
          <div className='default_modal'>
            {this.props.title}
            {this.props.children}
            {this.props.modals.find(x=>x.id=== this.props.modalId).validationObject.action != undefined ?
              <button 
                onClick={()=> this.onValidate()}>
                Validate
              </button>
            :
              ''
            }
            <button onClick={()=> this.toggleVisibility()}>Cancel</button>
          </div>
        :
          ''
        }
      </div>
    );
  }

  onValidate = () => {
    this.props.modals.find(x=>x.id=== this.props.modalId).validationObject.action();
    this.props.toggleModal(this.props.modalId);
  }

  toggleVisibility = () => {
    this.props.toggleModal(this.props.modalId);
  }

  checkModalPresenceInReducer = () => {
    const modalInReducer  = this.props.modals.find(x=>x.id === this.props.modalId);
    if (modalInReducer === undefined){
      this.props.addModal(this.props.modalId);
    }
    else{
      //By default we hide the modal on first render, because if we need a modal showing
      //without previous user action on the page, we probably
      //need something else than a modal
      this.props.toggleModal(this.props.modalId, false);
    }
    this.setState({hasInitialized: true});
  }
}//class


const mapStateToProps = (state) => {
  return {
    modals: state.modalsReducer,
  };
}

const mapDispatchToProps = {
 addModal,
 toggleModal,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Modal);