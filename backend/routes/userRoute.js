import express from 'express';
import User from '../models/userModel'
import { getToken } from '../util';
const { registerValidation, signinValidation } = require("./../validation")
const bcrypt = require("bcryptjs");
const router = express.Router();

// Đăng ký
router.post("/register", async (req, res) => {
    // Validate data form
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // Checking user existing in db
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).json({ message: "Email đã được sử dụng! Vui lòng đăng ký bằng tài khoản email khác" })

    // Hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const hashedRepassword = await bcrypt.hash(req.body.repassword, salt);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        repassword: hashedRepassword,
    })
    const newUser = await user.save();
    if (newUser) {
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    } else {
        res.status(401).send({ msg: 'Invalid user data' });
    }
})

// Đăng nhập
router.post("/signin", async (req, res) => {
    //Validate data form
    const { error } = signinValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    // Check email correct
    const signinUser = await User.findOne({ email: req.body.email })
    if (!signinUser) {
        return res.status(400).json({ message: 'Email hoặc Mật khẩu không đúng' });
    }
    // Check password correct
    const validPassword = await bcrypt.compare(req.body.password, signinUser.password)
    if (!validPassword) {
        return res.status(400).json({ message: "Email hoặc Mật khẩu không đúng" })
    }
    if (signinUser) {
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })
    }
})

// Create 1 user is Admin => isAdmin :true, còn những thằng user khác đăng ký thì isAdmin:false
// router.get("/createAdmin", async (req, res) => {
//     try {
//         const user = new User({
//             name: 'vungdo',
//             email: 'vungdoxuankthd@gmail.com',
//             password: '123456',
//             repassword: '123456',
//             isAdmin: true
//         });
//         const newUser = await user.save();
//         res.send(newUser)
//     } catch (error) {
//         res.send({ msg: error.message })
//     }
// })


export default router;