var util = require('util');

module.exports = function (context, req) {
    //context.log('JavaScript queue trigger function processed order');
    //context.log(req);
    //context.log(req.query);
    context.done(null, {
        message: {
            subject: util.format('Missing parts in database (%s)!', req.query.partName),
            content: [{
                type: 'text/plain',
                value: util.format("Qty of '%s' dropped below minimum amount. Order more parts. ", req.query.partName)
            }]
        }
    });
}