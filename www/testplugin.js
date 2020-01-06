// window.echo = function(str, callback) {
//     cordova.exec(callback, function(err) {
//         callback('Nothing to echo.');
//     }, "Echo", "echo", [str]);
// }

var exec = require('cordova/exec');

module.exports = {
    echo: function(message, onSuccess, onError) {
        exec(onSuccess, onError, "Echo", "echo", [message]);
    }
};