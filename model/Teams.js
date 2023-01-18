const mongoose = require('mongoose');



const teamSchema = new mongoose.Schema(
    {
        title: String,
        status: {
            type: Boolean,
            default: true
        }

    },
    {
        timestamps: true,
        toJSON: {
            getters: true,
        },
        toObject: {
            getters: true,
        },
    }
);

module.exports = mongoose.model('Teams', teamSchema);