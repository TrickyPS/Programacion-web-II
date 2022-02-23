const jwt = require("jsonwebtoken")

const createToken = (user)=>{
    const token = jwt.sign({user},"secret",{expiresIn:"12h"})
    return token 
}

module.exports = {createToken}