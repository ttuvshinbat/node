

router.get("/userid/id", function (req, res, next) {
    const id = req.params.id
    if (id < 10) {
        const err = new Error("can\'t find user with this ID!")
        err.status = "fail";
        err.statusCode = 500
        return next(err);
    }
    res.send("user info with ID" + id);
})