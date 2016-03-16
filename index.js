
module.exports = function (err, fields) {
    if (!err) return;
    if (fields && !Array.isArray(fields)) throw new Error("Fields should be an array");
    
    var oberr = {};
    Object.getOwnPropertyNames(err).forEach(function(key) {
        if (!fields || fields.indexOf(key) > -1) {
            oberr[key] = err[key];
        }
    });
    
    return oberr;
};