const User = require("../models/userModel")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')



exports.signup = asyncHandler ( async (req,res) => {
    
    const {name, email, password} = req.body
    
    if(!name || !email || !password){
        res.status(400).json({ error: 'Please add all fields' })
    }
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400).json({ error: 'User already exists' })
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await User.create({
        name,
        email,
        password : hashedPassword
    })
    if(user){
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email,
            token : this.generateToken(user._id)
        })
    }else {
        res.status(400).json({ error: 'Invalid user data' })
        
    }
})


exports.login = asyncHandler ( async (req,res) => {
    const {email, password} = req.body
    User.findOne({email})
        .then(user => {
            if(!user) {
                return res.status(400).json({ error: 'User does not exist !' })
            }else {
                bcrypt.compare(password, user.password)
                .then(valid => {
                    if(!valid) {
                        return res.status(400).json({ error: 'Wrong password !'})
                    }else {
                        return res.status(200).json({
                            _id : user._id,
                            name : user.name,
                            email : user.email,
                            token : this.generateToken(user._id)
                        })
                    }
                    
                })
                .catch(error => res.status(500).json({ error }))
            }
        })
        .catch(error => res.status(500).json({ error }))
})

exports.getMe = asyncHandler ( async (req,res) => {
    res.status(200).json(req.user)
})

exports.generateToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {expiresIn : '999 days'})
}