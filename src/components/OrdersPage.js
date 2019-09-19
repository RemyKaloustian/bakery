import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import debug from '../utils/debug';
import Alert from "./Alert";
import OrderDetail from "./OrderDetails";

class OrdersPage extends React.Component {
    
  render() {
    debug.log('history in Orderspage', this.props.history);
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