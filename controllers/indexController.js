/**
 * Created by USER on 2017/5/2.
 */

var indexService = require("../services/indexService");

exports.getMember = function(req, res){
    indexService.getMember("", function(err, result){
        res.json(result);
    })
}