const express = require('express');
const {refreshAccessToken,logIn,signUp} = require('../controllers/auth.controller');

const api = express.Router();

api.post("/refresh-access-token", refreshAccessToken);

api.post("/register", signUp);
api.post("/login",logIn);

module.exports = api;