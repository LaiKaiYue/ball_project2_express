/**
 * Created by USER on 2017/5/2.
 */

var db = require("../db/connection");

exports.getMember = function(cond, callback){
    db.query("select * from member", function(err, result){
        result = result[0];
        result.image = "/images/animal4.png";
        callback(null, result);
    })
}
