const notificationModel = require("./../models/notifications.model");

exports.getUserNotifications = async(req, res) => {
    try {
        const {id} = req.params;
        const notifications = await notificationModel.findById(id);
        if(!notifications) res.send({message: "No hay notificaciones"}).end();
        res.send({data: notifications});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
};

exports.postUserNotifications = async(req, res) => {
    try {
        const {id} = req.params;
        const notifications = await notificationModel.findById(id);
        if(!notifications) res.send({message: "No se pudo notificar"}).end();
        res.send({data: notifications});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
};