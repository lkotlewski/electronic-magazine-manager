var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var https = require('https');
var querystring = require('querystring');

module.exports = function (context, req) {
    MongoClient.connect(process.env.CosmosDBConnectionString, {useNewUrlParser: true},  (err, client) => {
        let send = response(client, context);
        context.log("tp1");
        if (err) send(500, err.message);
        let db = client.db('eem');
        
        let newAction = ({amount} = req.body);        
        var o_id = new ObjectId(req.query.id);
        db.collection('part')
        .findOne({"_id": o_id}, (err, result) => {
            if (err) send(500, err.message);
            if (newAction.amount < 0 && Math.abs(newAction.amount) > result.amount) send(500, "Not enought elements in database!");
            else {
                db.collection('part')
                    .findOneAndUpdate({"_id": o_id}, {$inc: { "amount" : newAction.amount }},{returnOriginal: false}, (err, doc) => {
                    if (err) {
                        console.log("Something wrong when updating data!");
                        if (err) send(500, err.message);
                    }
                    db.collection('transaction').insertOne({
                        user: "TestUser",
                        partId: req.query.id,
                        amount: newAction.amount,
                        date: new Date(),
                        partNumber: doc.value.partNumber
                    },(err, newPart) => {
                        if (err) send(500, err.message);
                    });
                    if (doc.value.amount < doc.value.minAmount) {
                        callFcn(doc.value.partNumber);
                    }
                    send(200, JSON.parse(JSON.stringify(doc)));
                    console.log(doc);
                });
            }
        });
    });
};

function callFcn(name) {

    var email_options = {
        host: 'eem-api.azurewebsites.net',
        port: '443',
        path: '/api/sendemail/'+ name,
        method: 'POST',
    };

    var request = https.request(email_options, (res) => {
        var body = "";
        res.on("data", (chunk) => {
            body += chunk;
        });
        res.on("end", () => {
            context.res = body;
            context.done();
        });
    }).on("error", (error) => {
        context.log('error');
        context.res = {
            status: 500,
            body: error
        };
        context.done();
    });
    request.end();
}

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