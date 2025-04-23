import React from 'react';
import PropTypes from 'prop-types';

const OrderItem = ({ itemName, quantity, price }) => {
  return (
    <div className="order-item">
      <h3>{itemName}</h3>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
};

OrderItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default OrderItem;