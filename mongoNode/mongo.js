const express = require('express');
const app = express();
const port = 8887;
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "PUT, PATCH, DELETE");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
})
app.listen(port, () => console.log(`Server running at localhost:
${port}!`))

app.post('/insert', (req, res) => {
    input = req.body.params;
    MongoClient.connect(url, { useUnifiedTopology: true,
    useNewUrlParser: true }, (err, data) => {
    if (err) {
    console.log('Unable to connect to the mongoDB: ', err);
    return console.log('Unable to connect to the mongoDB: ', err);
    } else { // Server connected
    db = data.db("project");
    var collection = db.collection("products");
    collection.insertOne(input, (err,result) => {
    if (err) { data.close();
    return; }
    res.send( {"message": 'Record added',
    "id": result.insertedId});
    }) // insertOne
    } // Server connected
    data.close();
    }); // Mongodb
    }); // Post

    // app.get('/retrieve', (req, res) => {
    //     input = req.query;
    //     console.log(input);
    // // if(input.cid === ''){
    // //     input = '{}';
    // //     console.log(input);
    // // }
    //     MongoClient.connect(url, { useUnifiedTopology: true,
    //     useNewUrlParser: true }, (err, data) => {
    //     if (err) {
    //     console.log('Unable to connect to the mongoDB: ', err);
    //     return console.log('Unable to connect to the mongoDB: ', err);
    //     } else { // Server connected
    //     db = data.db("project");
    //     var collection = db.collection("products");
    //     collection.find(input).toArray( (err,records) => {
    //     if (err) { data.close();
    //     return; }
    //     i = records.length;
    //     res.send(records);
    //     }) // find
    //     } // Server connected
    //     data.close();
    //     }); // Mongodb
    //     }); // Get


        
        app.get('/retrieve', (req, res) => {
            input = req.query;
             if(input.pID === ''){
                 input = '{}';
                 console.log(input);
              }
            MongoClient.connect(url, { useUnifiedTopology: true,
            useNewUrlParser: true }, (err, data) => {
            if (err) {
            console.log('Unable to connect to the mongoDB: ', err);
            return console.log('Unable to connect to the mongoDB: ', err);
            } else { // Server connected
            db = data.db("project");
            var collection = db.collection("products");
            collection.find(input).toArray( (err,records) => {
            if (err) { data.close();
            return; }
            i = records.length;
            res.send(records);
            }) // find
            } // Server connected
            data.close();
            }); // Mongodb
            }); // Get

        app.get('/delete', (req, res) => {
            input = req.query;
            MongoClient.connect(url, { useUnifiedTopology: true,
            useNewUrlParser: true }, (err, data) => {
            if (err) {
            console.log('Unable to connect to the mongoDB: ', err);
            return console.log('Unable to connect to the mongoDB: ', err);
            } else { // Server connected
            db = data.db("project");
            var collection = db.collection("products");
            collection.deleteOne(input, (err,result) => {
                if (err) { data.close();
                return; }
                res.send( {"message": 'Record deleted',
                "id": result.insertedId});
                }) // insertOne
                } // Server connected
                data.close();
                }); // Mongodb
}); // Post


app.get('/update', (req, res) => {
    input = req.query;
    
    MongoClient.connect(url, { useUnifiedTopology: true,
    useNewUrlParser: true }, (err, data) => {
    if (err) {
    console.log('Unable to connect to the mongoDB: ', err);
    return console.log('Unable to connect to the mongoDB: ', err);
    } else { // Server connected
    db = data.db("project");
    var collection = db.collection("products");
    var myquery = { pID : input.pID };
  var newvalues = { $set: {pDesc : input.pDesc ,  pqty : input.pqty, priceperunit : input.priceperunit, rqty : input.rqty } };
  collection.updateOne(myquery, newvalues, (err, result) => {
        if (err) { data.close();
        return; }
        res.send( {"message": 'Record updated',
        "id": result.insertedId});
        }) // insertOne
        } // Server connected
        data.close();
        }); // Mongodb
        }); // Post
        
// app.get('/update', (req, res) => {
//     input = req.query;
    
//     MongoClient.connect(url, { useUnifiedTopology: true,
//     useNewUrlParser: true }, (err, data) => {
//     if (err) {
//     console.log('Unable to connect to the mongoDB: ', err);
//     return console.log('Unable to connect to the mongoDB: ', err);
//     } else { // Server connected
//     db = data.db("project");
//     var collection = db.collection("products");
//     var myquery = { pid : input.pid };
//   var newvalues = { $set: {pDesc: input.pDesc, pqty: input.pqty,
//      priceperunit:input.priceperunit, rqty:input.rqty } };
//   collection.updateOne(myquery, newvalues, (err, result) => {
//         if (err) { data.close();
//         return; }
//         res.send( {"message": 'Record updated',
//         "id": result.insertedId});
//         }) // insertOne
//         } // Server connected
//         data.close();
//         }); // Mongodb
//         }); // Post










                