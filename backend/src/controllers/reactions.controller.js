const reactionsModel = require("./../models/reactions.model");
const postModel = require("./../models/posts.model");

exports.newReaction = async (req, res) => {
  try {
    const { like, user, idPost } = req.body;
    if (!user || !like || !idPost)
      return res.send({
        message: "Los datos enviados en el body son invalidos",
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
    res.send({ message: error });
  }
};

exports.updateReaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const reaction = await reactionsModel.findById(id);
    if (!reaction) return res.send({ message: "No se encontró la reacción" });
    const updatedReaction = await reactionsModel.findOneAndUpdate(
      { _id: id },
      { $set: body },
      { new: true }
    );
    return res.send({ data: updatedReaction });
  } catch (error) {
    console.log({ message: error });
    res.send({ message: error });
  }
};
