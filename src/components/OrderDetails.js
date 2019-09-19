import React from "react";

class OrderDetail extends React.Component {
    
  render() {
    return (
      <div>
        Order detail
        <div>{this.props.order.date}</div>
        Items:
        <div>{this.props.order.items.map(function(item, index){
            return <p>{item.name}: {item.qty}</p>;
          })}
        </div>
        Addresses:
        <div>{this.props.order.addresses.map(function(address, index){
            return <p>{address.address}</p>;
          })}
        </div>
      </div>
    );
  }
}//class
  
export default OrderDetail;