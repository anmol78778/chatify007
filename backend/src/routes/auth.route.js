import express, { Router } from "express";

import { signup } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup",signup)
router.get("/login",(req,res)=>{
    res.send("aajo login krte hai ");
})
router.get("/logout",(req,res)=>{
    res.send("jldi wahan se hato  ");
})

export default router