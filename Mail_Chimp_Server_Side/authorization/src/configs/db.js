const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://kirankumar:masaiAssignment@masaiassignments.ipvmg.mongodb.net/Authorization_and_OAuth?retryWrites=true&w=majority");
}


module.exports = connect;