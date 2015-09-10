module.exports = function () {
    return function (req, res, next) {
        var ip = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket &&
            req.connection.socket.remoteAddress;

        req.refinedIP = ip;

        next();
    };
}