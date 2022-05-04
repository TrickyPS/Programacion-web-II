const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "0a1b2c3d4e";

exports.createAccessToken = function(user){
    const payload = {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
        createToken: moment().unix(),
        exp: moment().add(10, "days").unix()
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