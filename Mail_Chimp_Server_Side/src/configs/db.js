const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://kirankumar:masaiAssignment@masaiassignments.ipvmg.mongodb.net/Mail_Chimp?retryWrites=true&w=majority");
}


module.exports = connect;