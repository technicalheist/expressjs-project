var MongoClient = require('mongodb').MongoClient;
var url = process.env.DB_SERVER;

var connect = () => new Promise((resolve, reject)=>{
    MongoClient.connect(url, function(err, db) {
        if (err) reject(err);
        let dbo = db.db(process.env.DB);
            resolve(dbo)
      });
});

module.exports = connect; 