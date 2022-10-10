var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/Ecart";


MongoClient.connect(url, function(err ,database){
    if(err) throw err;
    var db = database.db("Ecart");
    var query = {productid:"01"};
    db.collection("products").findOne(query, function(err, result){
        if(err) throw err;
        console.log("Result;"+result.p_name);

    });

    db.collection("products").find({}).toArray(function(err , res){
        if(err) throw err;
        console.log(res);
    });


});

