🚀 SendIt Courier API
This is the backend for the SendIt Courier App, built with Node.js, Express, MongoDB, and session-based authentication. The API enables users to manage shipments with role-based access control (RBAC) for admins and regular users.

📌 Features
✅ User Authentication (Session-based login/logout)
✅ Role-Based Access Control (Admins & Regular Users)
✅ Order Management (Create, View, Update, Delete Orders)
✅ Admin Privileges (View all orders, manage users)
✅ Session Handling (Keeps users logged in with cookies)
🛠 Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: Sessions (express-session)
CORS Support: Configured for frontend
🔧 Installation
1️⃣ Clone the repository
sh
Copy
Edit
git clone https://github.com/your-repo/sendit-backend.git
cd sendit-backend
2️⃣ Install dependencies
sh
Copy
Edit
npm install
3️⃣ Start MongoDB (Ensure MongoDB is running locally)
sh
Copy
Edit
mongod
4️⃣ Run the server
sh
Copy
Edit
node server.js
✅ The server will start on http://localhost:5000.

🔐 Authentication
The API uses session-based authentication, keeping users logged in using cookies instead of JWT tokens.

✅ Login
Endpoint: POST /auth/login

Request Body:
json
Copy
Edit
{
  "email": "user@example.com",
  "password": "password123"
}
Response (on success):
json
Copy
Edit
{
  "message": "Login successful",
  "user": {
    "_id": "userId123",
    "email": "user@example.com",
    "isAdmin": false
  }
}
❌ Logout
Endpoint: POST /auth/logout

Response:
json
Copy
Edit
{ "message": "Logged out successfully" }
🔍 Check Session
Endpoint: GET /auth/session

Response:
json
Copy
Edit
{ "isAuthenticated": true, "user": { "_id": "userId123", "email": "user@example.com" } }
📦 Orders API
📌 Create a New Order
Endpoint: POST /orders
Authentication Required: ✅ Yes

Request Body:
json
Copy
Edit
{
  "senderName": "John Doe",
  "senderAddress": "123 Main Street",
  "senderContact": "+1234567890",
  "receiverName": "Alice Smith",
  "receiverAddress": "789 Oak Street",
  "receiverContact": "+9876543210",
  "packageDescription": "Laptop",
  "packageWeight": 2.5,
  "specialInstructions": "Handle with care",
  "deliveryOption": "express",
  "pickupDropoff": "door",
  "paymentMethod": "cash"
}
Response:
json
Copy
Edit
{
  "message": "Order stored successfully!",
  "order": { "_id": "orderId123", "status": "Pending" }
}
📌 Get Logged-in User's Orders
Endpoint: GET /orders/my-orders
Authentication Required: ✅ Yes

Response:
json
Copy
Edit
[
  {
    "_id": "67beb93b7bc01f2db2bc08dd",
    "senderName": "Ben Johnson",
    "receiverName": "Bob Smith",
    "packageDescription": "Electronics - laptop",
    "status": "delivered"
  }
]
📌 Get All Orders (Admin Only)
Endpoint: GET /orders
Authentication Required: ✅ Yes (Admin Only)

Response:
json
Copy
Edit
[
  {
    "_id": "67beb93b7bc01f2db2bc08dd",
    "senderName": "Ben Johnson",
    "receiverName": "Bob Smith",
    "packageDescription": "Electronics - laptop",
    "status": "delivered"
  },
  {
    "_id": "67beb9547bc01f2db2bc08df",
    "senderName": "Alice Johnson",
    "receiverName": "Bob Williams",
    "packageDescription": "Electronics - Laptop",
    "status": "Pending"
  }
]
📌 Get Orders for a Specific User (Admin Only)
Endpoint: GET /orders/user/:userId
Authentication Required: ✅ Yes (Admin Only)

Response:
Returns orders for the specified user.

📌 Update an Order (Owner/Admin Only)
Endpoint: PUT /orders/:id
Authentication Required: ✅ Yes
Allowed: Order owner or Admin

Response:
json
Copy
Edit
{ "message": "Order updated successfully", "order": { "_id": "orderId123", "status": "Delivered" } }
📌 Delete an Order (Owner/Admin Only)
Endpoint: DELETE /orders/:id
Authentication Required: ✅ Yes
Allowed: Order owner or Admin

Response:
json
Copy
Edit
{ "message": "Order deleted successfully" }
👤 Users API
📌 Get All Users (Admin Only)
Endpoint: GET /users
Authentication Required: ✅ Yes (Admin Only)

Response:
json
Copy
Edit
[
  { "_id": "userId123", "email": "user@example.com", "role": "user" },
  { "_id": "adminId456", "email": "admin@example.com", "role": "admin" }
]
📌 Get Logged-in User's Profile
Endpoint: GET /users/me
Authentication Required: ✅ Yes

Response:
json
Copy
Edit
{ "_id": "userId123", "email": "user@example.com", "role": "user" }
🌐 CORS Configuration
Frontend URL: http://192.168.0.175:19006
CORS Settings:
js
Copy
Edit
app.use(cors({
  origin: "http://192.168.0.175:19006",
  credentials: true
}));
🚀 Running the API
1️⃣ Start MongoDB:

sh
Copy
Edit
mongod
2️⃣ Run Server:

sh
Copy
Edit
node server.js
3️⃣ API Base URL:
http://localhost:5000

📜 Notes
🔒 All authenticated requests require a valid session cookie.
🔑 Admin routes are restricted using isAdmin middleware.
🚚 Users can only manage their own orders unless they are an admin.
