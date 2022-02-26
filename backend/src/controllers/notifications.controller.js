const notificacionModel = require("./../models/notifications.model");

exports.getUserNotifications = async(req, res) => {
    try {
        const {id} = req.params;
        const notifications = await notificacionModel.findById(id);
        if(!notifications) res.send({message: "No hay notificaciones"}).end();
        res.send({data: notifications});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
};