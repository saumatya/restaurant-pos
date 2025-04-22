import React, { useState, useEffect } from "react";
import api from "../api";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Fetch menu items from the backend
    const fetchMenu = async () => {
      try {
        const response = await api.get("/menu");
        setMenu(response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menu.map((item) => (
          <li key={item.menuid}>
            <h3>{item.item_name}</h3>
            <p>Price: ${item.rate}</p>
            <p>Category: {item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
