
## 6. Functionalities

| Functionality              | Status         | Description                                           |
|----------------------------|----------------|-------------------------------------------------------|
| 🍽️ View Menu Items         | ✅ Done         | Users can browse all menu items                      |
| ➕ Add/Remove Items to Order| ✅ Done         | Users can add or remove dishes from their order      |
| 🧾 Order Placement          | ✅ Done         | Submit order with selected items and auto-total      |
| 🛠️ Menu Management (Admin) | ⚙️ In Progress | Admin can add/edit/delete menu items                 |
| 🗂️ API CRUD                 | ✅ Done         | Separate API routes for menu and order management    |
| 🔄 Total Calculation        | ✅ Done         | Real-time total computed as items are added/removed  |

## 7. Technologies Used

| Category        | Technology                             |
|----------------|-----------------------------------------|
| **Frontend**    | React, Axios, CSS                      |
| **Backend**     | Node.js, Express, Sequelize ORM        |
| **Database**    | PostgreSQL                             |
| **API Testing** | Postman, Swagger UI                    |
| **Auth/Security** | CORS Policy                         |
| **Dev Tools**   | VS Code, Browser DevTools, GitHub      |
| **Deployment**  | Planned on Azure                       |

## 8. Code Quality & Documentation

- Modular folder structure with clean separation of concerns  
- Meaningful file and function names with inline documentation  
- Swagger UI used for auto-generated API docs  
- `README.md` to include setup instructions and usage overview  

## 9. Testing and Debugging

| Test Type            | Status        | Tools Used                      |
|----------------------|---------------|---------------------------------|
| Manual Testing       | ✅ Ongoing     | Postman, Swagger UI, Browser UI |
| API Response Checks  | ✅ Done        | Postman collections              |
| Debugging            | ✅ Active      | DevTools, Console, Alerts       |
| Automated Tests      | ⏳ Planned     | Jest, Supertest (for backend)   |

### Details

- **Backend**:
  - Proper error responses with HTTP status codes  
  - Logging via `console.log` for key operations  

- **Frontend**:
  - Alerts and UI feedback for errors and actions  
  - Responsive to user actions and order updates  

## 10. User Interface & Experience

- **Simple, responsive layout using React**  
- **Live updates on total cost when adding/removing items**  
- **Admin interface (WIP) for managing menu**  
- **Visual feedback through alerts and status messages**  

## 11. Next To Be Done ✅

| Task                               | Priority | Notes                                         |
|------------------------------------|----------|-----------------------------------------------|
| 🔐 Role-Based Access Control        | High     | Separate access for Admin and User roles      |
| 🔑 JWT Authentication               | High     | Secure login for users and admins             |
| 🖼️ Better UI/UX                     | Medium   | Focused now on functionality, improve design later |
| 📊 Sales Report Generation          | Medium   | Admin can view/export sales data              |
