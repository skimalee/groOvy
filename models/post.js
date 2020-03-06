const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema ({
    content: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true 
});


const postSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    artist: String,
    title: String,
    genre: {
        type: String,
        enum: ['HIP HOP', 'R&B', 'ROCK', 'EDM', 'POP', 'COUNTRY', 'CLASSICAL', 'JAZZ', 'INDIE', 'OTHER']
    },
    comments: [commentSchema]
    }, {timestamps: true 
});

module.exports =  mongoose.model('Post', postSchema), mongoose.model('Comment', commentSchema)
