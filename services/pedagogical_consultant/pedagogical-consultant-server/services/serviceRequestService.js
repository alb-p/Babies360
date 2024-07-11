module.exports.funcserviceRequest = function funcserviceRequest(req, res) {
    const id = Math.floor(Math.random() * 10000);
    //transform id to a string
    const idString = id.toString();
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.status(202).send({
        message: 'I will check my agenda and let you know if I can make it.',
        id: idString
    });
}

