const jwt = require('jsonwebtoken')

const verify = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(authHeader) {
        const token = authHeader.split(' ')[1]
        jwt.verify(token, "mySecretKey", (err,data)=> {
            if(err) {
                return res.status(403).json('token is invalid')
            }
            req.user = data;
            next()
        })
    } else {
        res.status(401).json("not authenticated")
    }
}

module.exports = verify