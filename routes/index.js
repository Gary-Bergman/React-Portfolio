const router = require("express").Router();
var nodemailer = require('nodemailer');
require("dotenv").config()
router.route("/api/submit")
  .post(function (req, res) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "garybergman00@gmail.com",
        pass: process.env.GMAIL_PW
      },
    });
    var mailOptions = {
      from: req.body.email,
      to: "garybergman00@gmail.com",
      subject: 'Portfolio Email From: ' + req.body.name,
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
module.exports = router;