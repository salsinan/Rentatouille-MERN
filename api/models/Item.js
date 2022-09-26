import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    photos: {
        type: [String]
    },
    desc: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    }
})

export default mongoose.model('Item', ItemSchema);