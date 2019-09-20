import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { cleanRemovedItems } from '../actions/actions';
import debug from '../utils/debug';
import NavbarMenu from './NavbarMenu';
import CartAddressSelection from './CartAddressSelection';
import CartFinalizeOrderModal from './CartFinalizeOrderModal';

class Cart extends React.Component {
  constructor(){
    super();
    this.state = { hasRenderedOnce: false };
  }
  
  render() {
    if(!this.state.hasRenderedOnce){
      this.props.cleanRemovedItems();
      this.setState({ hasRenderedOnce: true });
    }
    return (
      <div>
      <NavbarMenu/>
        <div>
          Cart
          {this.props.cart.length > 0 ?
            this.props.cart.map(function(item, index){
              return <CartItem {...item}/>
          })
          :
            <p>Your cart is empty :(</p>
          }
        </div>
        <CartAddressSelection/>
        <CartFinalizeOrderModal/>
      </div>
    );
  }
}

//When you want something from the store,
// use mapStateToProps
// choose the reducer from which you want to choose
// select the data (in this case 'food') from the props (see 'render()')
function mapStateToProps(state){
  debug.log('all the reducers in the state', state);
  return {
    cart: state.cartReducer,
    addresses: state.addressReducer,
  };
}

const mapDispatchToProps = {
  cleanRemovedItems,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Cart)