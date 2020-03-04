const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    email: String,
    posts: [Schema.Types.ObjectId],
    likes: [Schema.Types.ObjectId],
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)