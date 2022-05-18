const reactionsModel = require("./../models/reactions.model");
const postModel = require("./../models/posts.model");

exports.newReaction = async (req, res) => {
  try {
    const { like, idPost } = req.body;
    const user = req.user?.id
    if (!user || !like || !idPost)
      return res.status(400).send({
        message: "Los datos enviados en el body son invalidos",
        data:null
      });

    const reaction = new reactionsModel({ like, user });
    const newReaction = await reaction.save();
    await postModel.updateOne(
      { _id: idPost },
      { $push: { reactions: newReaction._id } }
    );
    return res.send({ message: "Reacción creada", data: newReaction });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno del servidor",data:null });
  }
};

exports.updateReaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const reaction = await reactionsModel.findOne({user:id});
    if (!reaction) 
      return res.send({ message: "No se encontró la reacción" ,data:null});
    const updatedReaction = await reactionsModel.findOneAndUpdate(
      { user: id },
      { $set: body },
      { new: true }
    );
    return res.send({ data: updatedReaction });
  } catch (error) {
    console.log({ message: "Error interno del servidor" });
    res.status(500).send({ message: "Error interno del servidor",data:null });
  }
};
