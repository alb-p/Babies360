module.exports.funcacceptPayment = function funcacceptPayment(req, res) {
    const amount = String(req.body.amount/100);
    const currency = req.body.currency;
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send({
        message: 'Payment of '+ amount + currency +' received correctly.'
    });
}

