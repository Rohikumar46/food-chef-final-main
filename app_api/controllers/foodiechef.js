var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.foodiechefCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.foodiechefListByDistance = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.foodiechefReadOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.foodiechefUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.foodiechefDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
