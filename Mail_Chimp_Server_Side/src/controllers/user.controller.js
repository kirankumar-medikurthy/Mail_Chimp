const express = require('express');

const userModel = require('../models/user.model');

const sendMail = require('../utils/sendMail');

const router = express.Router();


router.get("", async(req, res) => {

    const page = +req.query.page || 1;
    const size = +req.query.size || 10;
    const offset = (page - 1) * size;

    const user = await userModel.find({}).skip(offset).limit(size).lean().exec();

    const totalUserCount = await userModel.find().countDocuments();
    const totalpages = Math.ceil(totalUserCount / size);

    sendMail({
        from: "kiran1999m1234@gmail.com",
        to: "ankush@masai.school",
        subject: "Welcome to the MVC Mail chimp",
        text: "Welcome to the Mvc pattern mailtrap and nodemailer through mailchimp",
        html: "<p> Mvc pattern Welcome to the mailtrap and nodemailer through mailchimp</p>",
    });

    return res.status(200).send(user);
})


router.post("", async(req, res) => {
    const user = await userModel.create(req.body);

    return res.status(201).send(user);
})

router.patch("/:id", async(req, res) => {
    const user = await userModel.findByIdAndUpdate(req.params.id).lean().exec();

    return res.status(200).send(user);

})

router.delete("/:id", async(req, res) => {
    const user = await userModel.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(user);
})

module.exports = router;