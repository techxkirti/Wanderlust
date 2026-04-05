const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;
const { applyUserCleanup } = require("../middleware.js");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose);

applyUserCleanup(userSchema);

module.exports = mongoose.model("User", userSchema);