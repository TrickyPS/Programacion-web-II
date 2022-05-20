const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "0a1b2c3d4e";

exports.createAccessToken = function(user){
    const payload = {
        id: user._id,
        email: user.email,
        userName:user.userName,
        role: user.userType,
        createToken: moment().unix(),
        exp: moment().add(20, "seconds").unix()
    };

    return jwt.encode(payload, SECRET_KEY);
}

exports.createRefreshToken = function(user){
    const payload = {
        id: user._id,
        exp: moment().add(30, "days").unix()
    };

    return jwt.encode(payload, SECRET_KEY);
};

exports.decodedToken = function(token){
    return jwt.decode(token, SECRET_KEY, true);
}