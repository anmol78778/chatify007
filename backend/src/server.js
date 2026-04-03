import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import authRoutes from "../routes/auth.route.js"
import messageRoutes from "../routes/message.route.js"
dotenv.config();


const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT;

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

app.use(express.static(path.resolve(__dirname, "../frontend/dist")));

// 🔥 fallback (FIXED)
app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
});
app.listen(PORT, () => {
    console.log('Server is running on port 3000 ');
});