const requestIp = require('request-ip');

const getHeaderProps = (req, res) => {
    const ipaddress = requestIp.getClientIp(req);
    return res.status(200).json({
        ipaddress, 
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    })
} 

module.exports = getHeaderProps;