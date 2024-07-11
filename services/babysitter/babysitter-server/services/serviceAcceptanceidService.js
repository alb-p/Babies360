module.exports.funcserviceAcceptanceid = function funcserviceAcceptanceid(req, res) {
    //this is a mock function, it should be replaced by the actual implementation
    // possible values are 'accepted' or 'rejected'
    const acceptance = 'accepted'
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send({
        message: acceptance
    });
}

