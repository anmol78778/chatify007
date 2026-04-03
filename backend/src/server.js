import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import {connectDB} from "./lib/db.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

const __dirname = path.resolve();
const PORT = process.env.PORT;


app.use(express.static(path.resolve(__dirname, "../frontend/dist")));


app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000 ');
    connectDB();
});
