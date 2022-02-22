const {
    Schema,
    model,
    Types
} = require("mongoose");
const notifications = new Schema({
    seenornot: {
        type: Boolean,
    },
    textnotification: [{
        type: String,
    }],
    user: {
        type: Types.ObjectId,
        ref = "user"
    }
}, {
    versionKey: false,
    timestamps: true,
});
module.exports = model("notifications", notifications);