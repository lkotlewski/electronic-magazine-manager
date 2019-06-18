var MongoClient = require('mongodb').MongoClient;

module.exports = function (context, req) {
    context.log("mgs");
    context.log(JSON.stringify(req.body));
    MongoClient.connect(process.env.CosmosDBConnectionString, (err, client) => {
        let send = response(client, context);

        if (err) send(500, err.message);

        let db = client.db('eem');

        context.log(JSON.stringify(req.body));
        let newPart = ({ id, name, value } = req.body);

        db.collection('transaction').insertOne(
            {
                id: newPart.id,
                name: newPart.name,
                value: newPart.value
            },
            (err, newPart) => {
                if (err) send(500, err.message);

                send(200, newPart);
            }
        );
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