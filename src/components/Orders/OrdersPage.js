import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from '../GeneralComponents/Alert';
import OrderDetail from './OrderDetails';
import Navbar from '../GeneralComponents/NavbarMenu';

class OrdersPage extends React.Component {
  render() {
    return (
      <div>
      <Navbar/>
        Orders sir! {}
         {this.props.history.location.state !== undefined ?
            <Alert
              message={'Your order is confirmed!'}
              buttonName={'Got it!'}
            /> 
            : 
            ''
         }
         {this.props.orders.map(function(order, index){
            return <div>
                      <OrderDetail 
                        order= {order}
                      />
                    </div>;
        })}
      </div>
    );
  }
}//class

const mapStateToProps = (state) => {
    return {
      orders: state.ordersReducer,
    };
  }
  
export default connect(mapStateToProps, null)(withRouter(OrdersPage));