# 💬 Chat Application

A full-stack real-time chat application that enables users to communicate instantly through private and group messaging. Built with a focus on performance, scalability, and user-friendly design.

---

## 🚀 Features

- 🔐 User authentication (Signup / Login)
- 💬 Real-time one-to-one messaging
- 🟢 Online / Offline user status
- 📡 Instant message delivery using Socket.io
- 📱 Responsive UI for mobile and desktop
- 📁 Media sharing support (images/files if implemented)

---

## 🛠️ Tech Stack

**Frontend:**
- React.js / Next.js
- Tailwind CSS / CSS3
- Axios
- Socket.io-client

**Backend:**
- Node.js
- Express.js
- Socket.io
- MongoDB

**Authentication:**
- JSON Web Token (JWT)
- bcrypt.js

---

## 📂 Project Structure

chat-app/
│
├── Frontend/ # Frontend (React )
├── backend/ # Backend (Node + Express)
│
├── models/ # Database schemas
├── routes/ # API routes
├── controllers/ # Business logic
├── sockets/ # Socket event handlers
│
├── .env
└── README.md


---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
2. Install dependencies
Backend
cd server
npm install
Frontend
cd client
npm install
3. Environment Variables

Create a .env file inside the server/ directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000
4. Run the application
Start backend server
cd server
npm run dev
Start frontend app
cd client
npm start
📡 Real-Time Communication

This application uses Socket.io for real-time bidirectional communication between client and server, enabling instant messaging and live updates.


Login Page
Chat UI
Group Chat Screen
🚀 Future Improvements
Video and voice calling feature
End-to-end message encryption
Message reactions and replies
Cloud file storage (AWS S3 / Cloudinary)
Push notifications
🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Anmol Kumar
Electronics & Communication Engineering Student
Full Stack Developer | DSA 
