var express = require('express');
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var router = express.Router();


routers.get('/', function (req, res){
    res.direct('/burgers');
})

router.get('/burgers', function (req, res){
    burger.all(function (data){
        res.render("index", hbsObject);

    }
    )

})