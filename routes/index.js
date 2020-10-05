const router = require("express").Router();
var nodemailer = require('nodemailer');
const path = require("path");
require("dotenv").config()
router.route("/api/submit")
  .post(function (req, res) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "gary-bergman@outlook.com",
        pass: process.env.GMAIL_PW
      },
    });
    var mailOptions = {
      from: req.body.email,
      to: "gary-bergman@outlook.com",
      subject: 'Portfolio Email From: ' + req.body.name + `. Email sent from: ` + req.body.email,
      text: req.body.text
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log('Email sent: ' + info);
        res.send(info);
      }
    });
  })

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = router;