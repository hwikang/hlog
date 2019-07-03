const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = (cb) => {
    mongoClient.connect('mongodb+srv://khdrogba:0qDrcUzZoypi8FGm@hlog-cluster-tkqwg.mongodb.net/hlog?retryWrites=true&w=majority')
        .then(client => {
            console.log("db connected");
            _db = client.db();
            //console.log(_db)
            cb();
        })
        .catch(err => console.log(err));
}
const getDb = () => {
    if (_db) {
        // console.log("db=" + _db)
        return _db
    }
    //throw "No DB";
}
module.exports = {
    mongoConnect: mongoConnect,
    getDb: getDb
}