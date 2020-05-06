
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";

		var event = 'test';
		
		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  var dbo = db.db("test_db");
		  var myquery = {"_id":"Conta-Clip","modules":{$elemMatch:{"imei":"1050"}}};
		  var newvalues = {$push:{"modules.$.module_events":{event}}};
		  
		  dbo.collection("WP_clients").update(myquery, newvalues, function(err, res) {
			if (err) throw err;
			console.log("1 document updated");
			db.close();
		  });
		});	
