var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/Ecart";

MongoClient.connect(url ,function(err , database){
    if(err) throw err;

    var dbo= database.db("Ecart");
    // dbo.collection("products").deleteOne({ productid: "01"}, function(err ,result){
    //     if(err) throw err;
    //     console.log("Delete:" +result.deletedCount);
    // })

    dbo.collection("products").deleteMany({ productid: "02"}, function(err ,result){
           if(err) throw err;
         console.log("Delete:" +result.deletedCount);
    });
});


MongoClient.connect(url ,function(err , database){
    if(err) throw err;
    var dbo = database.db("Ecart");
    dbo.collection("products").drop(function(err, res){
        if(err) throw err;
        else if (res) console.log("Collection dropped");
        
    })
})
