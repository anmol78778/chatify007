import express from 'express'

const router = express.Router();

router.get("/send",(req,res)=>{
    res.send("message send kr diya bhai");
})
export default router