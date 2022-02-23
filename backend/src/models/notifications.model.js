const {
    Schema,
    model,
    Types
} = require("mongoose");
const notifications = new Schema({
    seen: {
        type: Boolean,
    },
    textnotification: [{
        type: String,
    }],
    user: {
        type: Types.ObjectId,
        ref : "user"
    }
}, {
    versionKey: false,
    timestamps: true,
});
module.exports = model("notifications", notifications);