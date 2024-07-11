const service = require('../services/acceptPaymentService.js');

module.exports.funcacceptPayment = function funcacceptPayment(req, res) {
    service.funcacceptPayment(req, res);
}

