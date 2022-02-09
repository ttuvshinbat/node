
const express = require("express");
// const app = express();
const fs = require("fs");
const router = express.Router();
const cors = require("cors")

// router.get(
//   "/user/:id",
//   function (req, res, next) {
//     const user_id = req.params.id;
//     if (user_id > 2000) next("route");
//     if (user_id < 50) next();
//     res.send("I will send user information #1");
//   },
//   function (req, res) {
//     res.send("He is a Loyal");
//   }
// );
// router.get("/user/:id", function (req, res) {
//   res.send("I will send user information #2");
// });

router.get("/user/:id", function (req, res, next) {
  const user_id = req.params.id;
  if (user_id % 2 === 0) res.send("that id is EVEN");
  date = new Date(Date.now());
  fs.appendFile(
    "user_activity_log.json",
    "\nuser/:id" + req.params.id + " date: " + date.toString(),
    () => { }
  );
  next("route");
});
router.get("/user/:id", function (req, res) {
  date = new Date(Date.now());
  res.send("that id is ODD");
  fs.appendFile(
    "user_activity_log.json",
    "\nuser/:id" + req.params.id + " date: " + date.toString(),
    () => { }
  );
});


function logOriginalUrl(req, res, next) {
  console.log("Request URL", req.originalUrl);
  next();
}
function logMethod(req, res, next) {
  console.log("Request Type", req.method);
  next();
}
var logStuff = [logOriginalUrl, logMethod];
router.post("/arrayuser/:id", logStuff, function (req, res, next) {
  res.send("User Info");
});
router.get("/userid/:id", function (req, res, next) {
  const id = req.params.id
  if (id < 10) {
    const err = new Error("can\'t find user with this ID!")
    err.status = "fail";
    err.statusCode = 500
    return next(err);
  }
  res.send("user info with ID" + id);
})
router.get("/user1/:id", function (req, res, next) {
  const id = req.params.id
  if (id < 10) {
    const err = new Error("can't find user with this ID!")
    err.status = "fail"
    return next(err)

  }
  res.send("user info with id" + id)
}, function (err, req, res, next) {
  res.status(500).json({ "message": err.status })
}
)
router.get("/user2/:id", function (req, res) {
  const id = req.params.id
  if (id < 10) {
    return res.status(500).json({ "message": "something went error!" })
  }
  res.send("User info with ID " + id)
})

router.get("/user3/:id", function (req, res, next) {
  const id = req.params.id
  if (id < 10) {
    const err = new Error("can't find user with this ID!")
    err.status = "fail"
    err.statusCode = 500
    next(err)

  }
  res.send("user info with id" + id)
}, function (err, req, res, next) {
  res.status(500).json({ "message": err.status })
}
)

router.use(function (err, req, res, next) {
  res.status(500).json({ "err": err, "message": "wrong of course", "custon": err.status })
})

module.exports = router