const mongoose = require('mongoose');
const schema = mongoose.Schema;

const listSchema = schema({
    title: String,
    todo : [{
        label: String,
        done: Boolean
    }]
});

const Lists = mongoose.model('lists',listSchema);
module.exports = Lists;
