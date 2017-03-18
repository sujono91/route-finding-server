/** @class Helper */
const HTTP_STATUS_CODE = require('./constant').HTTP_STATUS_CODE;

module.exports = {
    /**
    * Send HTTP Status Bad Request
    * @memberof Helper
    * @function sendError
    * @param req {Object} Request
    * @param res {Object} Response
    */
    sendError: (res, error) => {
        return res.status(HTTP_STATUS_CODE.BAD_REQUEST).send(error);
    },

    /**
    * Send HTTP Status Not Found with Message
    * @memberof Helper
    * @function validateNotFound
    * @param req {Object} Request
    * @param res {Object} Response
    */
    validateNotFound: (res) => {
        return res.status(HTTP_STATUS_CODE.NOT_FOUND).send({
            message: 'Location Not Found'
        });
    }
}