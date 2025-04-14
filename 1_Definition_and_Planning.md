# Project Phase 1 - Definition and Planning

The goal of this project is to develop a Restaurant POS (Point of Sale) web application that allows restaurant staff to efficiently manage food orders and billing. The application will provide a clear user interface for waiters to place orders, generate bills, and for managers (admins) to create and update the food menu, prices, and manage restaurant operations.

## Key Objectives

- Provide an intuitive interface for waiters to take orders and generate bills
- Implement a secure authentication system with roles (Admin and Normal User)
- Allow Admin to create/update/delete menu items and view order history
- Allow Users (waiters) to browse menu, place orders, and print bills
- Store all data persistently in a database
- Prepare the system for future deployment in real restaurant environments

---

## User Personas

### **Persona 1: The Restaurant Manager (Admin)**
**Name**: Heidi Niemi  
**Age**: 45  
**Location**: Helsinki, Finland  
**Occupation**: Restaurant Manager  
**Tech-Savvy Level**: Medium  
**Devices Used**: Desktop, Tablet  

🎯 **Goals**:  
✅ Easily manage and update food items and prices  
✅ Track total sales and monitor waiter activity  
✅ Maintain smooth restaurant workflow through digital system  

❌ **Frustrations**:  
Time-consuming manual menu updates  
Inconsistent billing from waiters  
Lack of centralized order record  

---

### **Persona 2: The Waiter (User)**
**Name**: Jari Koskinen  
**Age**: 28  
**Location**: Espoo, Finland  
**Occupation**: Restaurant Waiter  
**Tech-Savvy Level**: Medium  
**Devices Used**: Mobile, Tablet  

🎯 **Goals**:  
✅ Quickly take customer orders  
✅ Send orders to kitchen digitally  
✅ Generate accurate bills without manual calculation  

❌ **Frustrations**:  
Messy handwriting on paper orders  
Billing mistakes during rush hours  
Slow communication with kitchen staff  

---

## Use Cases and User Flows

| Use Case | Actors |
|---------|--------|
| User Login | Admin, Waiter |
| Browse Menu | Waiter |
| Place Order | Waiter |
| Generate Bill | Waiter |
| Add/Edit/Delete Menu Items | Admin |
| View Reports | Admin |

### User Flow 1: Login  
- Login Page:  
  - Enter username/password → Select role (Admin/User) → Click login  
  - Redirected to respective dashboard  

---

### User Flow 2: Menu Management (Admin)  
- Admin Dashboard → "Menu Management"  
- Add new item: Name, Category, Price  
- Edit existing item: Change name/price/category  
- Delete item from menu  

---

### User Flow 3: Place Order (Waiter)  
- Waiter Dashboard → Select table/customer  
- Browse food items → Add items to cart  
- Submit order → Send to kitchen system  

---

### User Flow 4: Generate Bill  
- Order Overview → Confirm final items  
- Click “Generate Bill”  
- Bill is displayed with tax, total, and option to print  

---

### User Flow 5: View Reports (Admin)  
- Admin Dashboard → Reports section  
- Filter by date, table, waiter  
- View daily, weekly, monthly sales summary  

---

## UI Prototypes

https://www.figma.com/design/8XWfa8PU1CdaMLWr8up5Bn/Ravintola-wireframe?node-id=0-1&t=NGAGwxUYnoWr7bHA-1

---

## Information Architecture and Technical Design

- **Navigation Flow**  
  - Separate dashboards for Admin and Users  
  - Easy access to primary actions like “Take Order” or “Manage Menu”

- **Frontend-Backend Flow**  
  - Frontend sends requests to backend API for all actions (CRUD on menu, orders)  
  - Backend handles validation, logic, and interacts with database  

- **Data Structure Blueprint**  
  - **Users Table** (id, name, email, password, role)  
  - **MenuItems Table** (id, name, category, price)  
  - **Orders Table** (id, waiter_id, table_number, order_time)  
  - **OrderItems Table** (id, order_id, menu_item_id, quantity)  

- **Used Technologies and Architecture**  
  - Frontend: Vue.js / React  
  - Backend: Node.js, Express  
  - Database: PostgreSQL
  - Authentication: JWT-based secure login  
  - Deployment: Azure

- **API Design**  
  - `GET /menu` – List all menu items  
  - `POST /menu` – Create new menu item (Admin only)  
  - `PUT /menu/:id` – Update menu item (Admin only)  
  - `DELETE /menu/:id` – Delete menu item (Admin only)  
  - `POST /order` – Place new order  
  - `GET /orders` – View orders (filterable)

---

## Project Management and User Testing

| Timeline | Task |
|----------|------|
| Week 1   | Define Personas, Use Cases, User Flows, Create UI mockups |
| Week 2   | Set up frontend and backend scaffolding |
| Week 3 | Implement Frontend functionality: menu management, order system, billing
| Week 4 | Implement functionality: APIs and frontend integration |
| Week 5   | Final testing, bug fixing, documentation, deployment |

---

## Tools Used

- Visual Studio Code  
- GitHub  
- Figma (for UI design)  
- Notion (for task tracking)  
- Postman (for API testing)

---

## User Testing Plan

**Functionality Testing**  
- Ensure login, menu, order, and billing functions work as expected  
- Test role-based access control (Admin vs Waiter)

**Integration Testing**  
- Validate frontend and backend communication  
- Test complete flow from menu setup to bill generation  

**Future Testing Plans**  
- Kitchen interface integration  
- Device responsiveness for tablets and mobiles  
- Performance under multiple concurrent users  

---

> This document will evolve as development progresses, and more details will be added during UI prototyping and implementation.
