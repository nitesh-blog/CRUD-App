var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/Ecart";

MongoClient.connect(url , function(err , database){
    if(err) throw err;
    var db = database.db('Ecart');
    db.collection("products").insertOne({ productid: "01" , p_name:"laptop" , price: "80000"} , function(err , result) {
        if(err) throw err;
        console.log("these records are added:"+result.insertedId);
    } );
});


MongoClient.connect(url ,function(err ,database){
    if(err) throw err;
    var db = database.db("Ecart");
    var product_array =[
        {productid:"02" , p_name:"Bags" , price:"5000"},
        {productid:"03" , p_name:"shoes" , price:"4000"},
        {productid:"04" , p_name:"headphones" , price:"2000"},

    ];

    db.collection("products").insertMany(product_array, function(err , result ){
        if(err) throw err;
        console.log("these records are added :"+result.insertedCount);

    });
});