const notificationModel = require("./../models/notifications.model");
const userModel = require("./../models/user.model")

exports.getUserNotifications = async(req, res) => {
    try {
        const id = req.user?.id;
        const user = await userModel.findById(id).select("notifications").populate("notifications");
        
        return res.send({data: user});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
};

exports.postUserNotifications = async(req, res) => {
    try {
        const {text,user} = req.body;
        const userOwner = req.user?.id;
        if(!text || !user || !userOwner) 
        return res.status(400).send({message:"Los datos enviados no son validos",data:null});
        const noti = await notificationModel.create({text,user:userOwner});

        await userModel.findOneAndUpdate({_id:user},{$push:{notifications:noti._id}})
        return res.send({data: true});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
};

exports.seeNoti = async(req,res)=>{
    try {
        
        const user = req.user?.id;
       
        const notifications = await userModel.findById(user).select("notifications");
        for(let noti of notifications){
            await notificationModel.updateOne({_id:noti},{$set:{seen:true}})
        }
        return res.send({data: true});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}