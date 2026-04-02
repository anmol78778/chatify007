import express, { Router } from "express";

const router = express.Router();

router.get("/signup",(req,res)=>{
    res.send("kaun ho tum register kr lo bhai");
})
router.get("/login",(req,res)=>{
    res.send("aajo login krte hai ");
})
router.get("/logout",(req,res)=>{
    res.send("jldi wahan se hato  ");
})

export default router