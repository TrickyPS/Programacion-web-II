const notificacionModel = require("./../models/notifications.model");

exports.getUserNotifications = async(req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
};