# Project Phase 2 – Basic Structure and Core Functionalities

In this phase, the focus was on laying down a robust foundation for the restaurant management system. The project introduces core features such as menu browsing, order management, and admin functionalities. With a scalable architecture using Node.js, React, and PostgreSQL, the system is being developed with modularity, maintainability, and scalability in mind.

## 1. Environment

The development environment is designed for both local and cloud deployments, with scalability and developer productivity in mind:

- **Frontend**: React.js (CRA), ready for deployment to Azure  
- **Backend**: Node.js with Express  
- **Database**: PostgreSQL via Sequelize ORM  
- **Version Control**: GitHub  
- **Dev Tools**: Visual Studio Code, Postman, Swagger UI, Browser DevTools  

## 2. Backend

The backend is built with **Node.js** and **Express.js**, structured for clean separation of concerns and RESTful API architecture.

- **Structure**: Organized into `controllers`, `models`, `routes`, and `migrations`  
- **ORM**: Sequelize used to define entities, relationships, and perform migrations  
- **Functionality**:
  - CRUD for menu and order management
  - Order placement, item addition/removal
  - Automatic total calculation on order  
- **Error Handling**: `try/catch` blocks with meaningful HTTP status responses  
- **API Testing**: Manual via Postman; documented with Swagger  
- **Security**: CORS policy enabled to support frontend communication  

## 3. Frontend

The frontend is built with **React.js**, delivering an interactive and modern UI for customers and admins.

- **Structure**:
  - `components/` – Reusable UI elements (e.g., MenuItem, OrderItem)
  - `pages/` – Pages for menu view, order form, admin panel  
  - `App.jsx` – App-level routing and layout  
- **API Interaction**: Axios for REST API communication  
- **UI Behavior**:
  - Displays menu items from backend
  - Allows adding/removing items from an order  
  - Shows total cost in real time  
- **Debugging**: `console.log`, alerts, browser network tab used during development  

## 4. Database

The database uses **PostgreSQL**, managed through Sequelize ORM, and structured with normalized entities and relationships.

- **Entities**:
  - `menus` – Menu items with name, price, availability  
  - `orders` – Orders with timestamp, status, and total cost  
  - `order_items` – Many-to-many relation between orders and menu items  
- **Relationships**:
  - One `order` can have many `order_items`
  - Each `order_item` is linked to one `menu` item  
- **Migrations**: Sequelize CLI used to create and manage schema changes  
- **Security**: Parameterized queries via ORM to prevent SQL injection  

## 5. Project Structure
Restaurant-Ordering-System/
├── client/                     # React frontend
│   ├── public/
│   └── src/
│       ├── components/         # MenuItem, OrderList, etc.
│       ├── pages/              # Home, Admin, OrderPage
│       └── App.jsx
├── server/                     # Express backend
│   ├── controllers/            # Business logic
│   ├── models/                 # Sequelize models
│   ├── migrations/             # DB migrations
│   ├── routes/                 # API endpoints
│   └── server.js
└── README.md




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
