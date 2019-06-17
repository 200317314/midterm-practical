// We will need our mongoose library
const mongoose = require(`mongoose`);

// Your schema
// Our schema
const MetaHumanSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    affiliation: {
        type: String,
        required: true
    },
    metaType: {
        type: String,
        enum: ['SUPERHERO', 'VILLAIN', 'ANTIHERO'],
        default: 'SUPERHERO'
    }
}, {
    timestamps: true
});

// Exporting our resource model
module.exports = mongoose.model('Metahuman', MetaHumanSchema);