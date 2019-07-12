const getDb = require('../utils/db').getDb
class User{
    constructor(id,password){
        this.id = id;
        this.password = password;
        this.date = new Date();
        this.isAdmin = false;
    }
    save(){
        const db = getDb();
        return db.collection('user').insertOne(this)
    }

    static login(id,password){
        const db = getDb();
        console.log(id,password)
       return db.collection('user').find({
            id:id,
            password:password
        })
        .toArray()
        .then(result=>{
           // console.log(result);
            return result[0];
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

module.exports=User;