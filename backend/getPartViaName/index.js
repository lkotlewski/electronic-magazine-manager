var MongoClient = require('mongodb').MongoClient;

module.exports = function (context, req) {
    MongoClient.connect(process.env.CosmosDBConnectionString, {useNewUrlParser: true},  (err, client) => {
        let send = response(client, context);
        
        if (err) send(500, err.message);
        let db = client.db('eem');

        db.collection('part')
            .findOne({partNumber: req.query.partNumber}, (err, result) => {
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