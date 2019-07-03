const getDb = require('../utils/db').getDb;

class blog {
    constructor(title, category, description) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.postdate = new Date();
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

}

module.exports = blog;