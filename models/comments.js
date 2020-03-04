const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema ({
    posts: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    content: String
}, {timestamps: true 
});

module.exports = mongoose.model('Post', postSchema)

