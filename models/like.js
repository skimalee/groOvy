const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema ({
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Like'
    },
    like: {
        type: Boolean
    }
})

module.exports = mongoose.model('Like', likeSchema)