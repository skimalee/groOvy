const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
}, {timestamps: true 
});

module.exports = mongoose.model('Post', postSchema)

