const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const verify = require('./authMiddleware')
router.post('/register', async (req,res)=> {
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password,salt)
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass
    });
    try{
        const user = await newUser.save();
        const {password, ...others} = user._doc
        res.status(200).json(others)
    } catch(err) {
        res.status(500).json(err)
    }
})

const generateAccessToken = (user) => {
    return jwt.sign({_id:user._id, isAdmin:user.isAdmin}, "mySecretKey", {expiresIn:'15m'})
}
const generateRefreshToken = (user) => {
    return jwt.sign({_id:user._id, isAdmin:user.isAdmin}, "myRefreshKey")
}




router.post('/login', async(req,res)=> {
    try{
        const user = await User.findOne({
                username: req.body.username,
        })
        const validate = await bcrypt.compare(req.body.password,user.password)
        if(user && validate) {
            const accessToken = generateAccessToken(user)
            const refreshToken = generateRefreshToken(user)
            refreshTokens.push(refreshToken)
            res.status(200).json({
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin,
                _id: user._id,
                accessToken,
                refreshToken
            })
        } else {
            res.status(403).json("WRONG!")
        }
    } catch(err) {
        res.status(500).json(err)
    }
})

router.delete('/login/delete', verify, (req,res)=> {
    if(req.user.isAdmin === true) {
        res.status(200).json('user has been deleted')
    } else {
        res.status(403).json('you are not allowed to delete!!')
    }
})
let refreshTokens = []
router.post('/refresh', async (req,res)=> {
    const refreshToken = req.body.token;
    if(!refreshToken) return res.status(401).json('you are not authenticated');
    if(!refreshTokens.includes(refreshToken)) return res.status(401).json('token invalid')
    jwt.verify(refreshToken, 'myRefreshKey', (err,data)=> {
        err && console.log(err);
        refreshTokens = refreshTokens.filter(token=> token !== refreshToken)
        const newAccessToken = generateAccessToken(data)
        const newRefreshToken = generateRefreshToken(data)
        refreshTokens.push(newRefreshToken)
        res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        })
    })
})





module.exports = router