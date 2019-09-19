import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from './Alert';
import OrderDetail from './OrderDetails';

class OrdersPage extends React.Component {
  render() {
    return (
      <div>
        Orders sir! {}
         {this.props.history.location.state !== undefined ?
            <Alert/> : ''
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

function mapStateToProps(state){
    return {
      orders: state.ordersReducer,
    };
  }
  
export default connect(mapStateToProps, null)(withRouter(OrdersPage));