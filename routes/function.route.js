const express = require("express");
const {postfunc, getallfunc, putfunc, delfunc,getfunc} = require("../controller/functioncontroller");
const { createeventValidator } = require("../validators/inputvalidators");
const { createqueryValidator } = require("../validators/queryvalidator");
const router = express.Router();

router.post("/events", createeventValidator,postfunc);
router.get("/events/:id", createqueryValidator,getfunc);
router.get("/events",getallfunc);
router.put("/events/:id", createeventValidator,putfunc);
router.delete("/events/:id", createqueryValidator,delfunc);

module.exports = router;