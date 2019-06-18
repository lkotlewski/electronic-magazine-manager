var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

module.exports = function(context, req) {
    MongoClient.connect(process.env.CosmosDBConnectionString, {useNewUrlParser: true}, (err, client) => {
    let send = response(client, context);

    if (err) send(500, err.message);

    let db = client.db('admin');

    var o_id = new ObjectId(req.query.id);
    context.log(req.query.id);

    //db.collection('part').deleteOne({_id: o_id}, (err, result) => {
     //   if (err) send(500, err.message);
    //    send(200, result);
    //});
    db.collection('part').deleteOne({"_id": o_id}, (err, result) => {
        if (err) send(500, err.message);
        send(200, result);
        });
    });
}

function response(client, context) {
    return function(status, body) {
    context.res = {
        status: status,
        body: body
    };

    client.close();
    context.done();
    };
}