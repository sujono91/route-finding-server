const HTTP_STATUS_CODE = require('./constant').HTTP_STATUS_CODE;

module.exports = {
    sendError: (res, error) => {
        return res.status(HTTP_STATUS_CODE.BAD_REQUEST).send(error);
    },

    validateNotFound: (res) => {
        return res.status(HTTP_STATUS_CODE.NOT_FOUND).send({
            message: 'Location Not Found'
        });
    }
}