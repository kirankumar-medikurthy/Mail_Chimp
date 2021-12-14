const mongoose = require('mongoose');

const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
        username_name: { type: String, required: false },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, minLength: 8, maxLength: 1000 },
        roles: [{ type: String, required: false }]
    }, {
        versionKey: false,
        timestamps: true
    })
    // It is called while updating and creating;
userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const hash = bcryptjs.hashSync(this.password, 8);

    this.password = hash;

    return next();
})

userSchema.methods.checkPassword = function(password) {
    const match = bcryptjs.compareSync(password, this.password);

    return match;
}
const User = mongoose.model('user', userSchema);


module.exports = User;