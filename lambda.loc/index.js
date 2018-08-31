const request = require('request')
exports.handler = (event, context, callback)=>{

    callback(null, JSON.stringify(request));
};
