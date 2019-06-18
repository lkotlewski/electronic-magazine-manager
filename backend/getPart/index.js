var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

module.exports = function (context, req) {
    MongoClient.connect(process.env.CosmosDBConnectionString, {useNewUrlParser: true},  (err, client) => {
        let send = response(client, context);
        
        if (err) send(500, err.message);
        let db = client.db('eem');
        //db.collection('part')
        //     .findOne({name: req.body.name})
        //    .toArray((err, result) => {
        //        if (err) send(500, err.message);
        //
        //        send(200, JSON.parse(JSON.stringify(result)));
         //   });
        //context.log(JSON.stringify(   req.body));
        
        var o_id = new ObjectId(req.query.id);
        // db.collection('part')
        //     .find({"_id": o_id})
        //     .toArray((err, result) => {
        //         if (err) send(500, err.message);
        //         send(200, JSON.parse(JSON.stringify(result)));
        //     });

        db.collection('part')
            .findOne({"_id": o_id}, (err, result) => {
                if (err) send(500, err.message);
                send(200, JSON.parse(JSON.stringify(result)));
            });
    });
};

function response(client, context) {
    return function (status, body) {
        context.res = {
            status: status,
            body: body
        };

        client.close();
        context.done();
    };
}