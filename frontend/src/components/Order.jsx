// import React, { useState } from "react";
// import api from "../api";

// const Order = () => {
//   const [orderDate, setOrderDate] = useState("");
//   const [orderItems, setOrderItems] = useState([]);
//   const [menuId, setMenuId] = useState("");
//   const [qty, setQty] = useState("");
//   const [rate, setRate] = useState("");

//   const handleAddItem = () => {
//     setOrderItems([...orderItems, { menuid: menuId, qty: qty, rate: rate }]);
//   };

//   const handleSubmit = async () => {
//     const orderData = {
//       order_date: orderDate,
//       items: orderItems,
//     };

//     try {
//       const response = await api.post("/order", orderData);
//       console.log("Order created:", response.data);
//     } catch (error) {
//       console.error("Error creating order:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Create Order</h1>
//       <input
//         type="date"
//         value={orderDate}
//         onChange={(e) => setOrderDate(e.target.value)}
//       />
//       <div>
//         <h3>Add Items to Order</h3>
//         <input
//           type="text"
//           placeholder="Menu ID"
//           value={menuId}
//           onChange={(e) => setMenuId(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Quantity"
//           value={qty}
//           onChange={(e) => setQty(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Rate"
//           value={rate}
//           onChange={(e) => setRate(e.target.value)}
//         />
//         <button onClick={handleAddItem}>Add Item</button>
//       </div>
//       <button onClick={handleSubmit}>Submit Order</button>
//     </div>
//   );
// };

// export default Order;
import React, { useState } from "react";
import api from "../api";

const Order = () => {
  const [orderDate, setOrderDate] = useState("");
  const [orderItems, setOrderItems] = useState([]);
  const [menuId, setMenuId] = useState("");
  const [qty, setQty] = useState("");
  const [rate, setRate] = useState("");

  const handleAddItem = () => {
    setOrderItems([...orderItems, { menuid: menuId, qty: qty, rate: rate }]);
    setMenuId("");
    setQty("");
    setRate("");
  };

  const handleSubmit = async () => {
    const orderData = {
      order_date: orderDate,
      items: orderItems,
    };

    try {
      const response = await api.post("/order", orderData);
      console.log("Order created:", response.data);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div>
      <h1>Create Order</h1>
      <input
        type="date"
        value={orderDate}
        onChange={(e) => setOrderDate(e.target.value)}
      />
      <div>
        <h3>Add Items to Order</h3>
        <input
          type="text"
          placeholder="Menu ID"
          value={menuId}
          onChange={(e) => setMenuId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div>
        <h3>Order Items</h3>
        <ul>
          {orderItems.map((item, index) => (
            <li key={index}>
              Menu ID: {item.menuid}, Quantity: {item.qty}, Rate: {item.rate}, Price: {item.qty * item.rate}
              <button onClick={() => setOrderItems(orderItems.filter((_, i) => i !== index))}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>Total Amount</h3>
        <p>
          {orderItems.reduce((total, item) => total + item.qty * item.rate, 0)}
        </p>
      </div>
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
};

export default Order;
