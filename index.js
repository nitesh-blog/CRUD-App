var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/Ecart";

// MongoClient.connect(url, function(err , database){
//     if(err) throw err;
//     console.log("Database Created");
// });

MongoClient.connect(url ,function(err ,database){
    if(err) throw err;

    var db = database.db("Ecart");
    db.createCollection("Products" , function(err , result){
        if(err) throw err;
        console.log("Collection Created");
    });
});

