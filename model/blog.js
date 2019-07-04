const getDb = require('../utils/db').getDb;
const mongodb = require('mongodb');
class blog {
    constructor(title, category, description,id) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.postdate = new Date();
        //this.id = id?id:null;
    }

    save() {
        const db = getDb();

        // console.log("db in model=" + db)
        db.collection('blog').insertOne(this)
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }
    static fetchAll() {
        const db = getDb();
        return db.collection('blog').find().toArray()
            .then(result => {
                //console.log(result);
                return result;
            })
            .catch(err => console.log(err));
    }
    static findById(id){
        const db = getDb();
        return db.collection('blog').find({
            _id: new mongodb.ObjectId(id)
        }).toArray()
        .then(result =>{
            //console.log(result)
            return result
        })
        .catch(err=>console.log(err))
    }
    static getRecentBlogs(){
       return this.fetchAll()
        .then(result=>{
            result.sort((a,b)=>{  //a 는 b+1인덱스
                //postdate가 큰 순서로 배열해야함
                //-1 리턴 되면 a가 앞으로
                //1을 리턴하면 b가 앞으로
                //a.postdate가 b보다 크면 = -1을 리턴해줘야 a가 앞으로감
                //복잡함...그냥 -1리턴하면 역순됨
                return -1;
            })
            const recentBlogs = [result[0],result[1],result[2] ] 
            return recentBlogs
        })
    }
}

module.exports = blog;