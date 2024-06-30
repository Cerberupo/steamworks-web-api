const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISiteLicenseService
 * **/
class ISiteLicenseService extends Base {

    constructor(key) {
        super(key, 'ISiteLicenseService');
        this.baseUrl = this.apiUrl;
    }

    GetCurrentClientConnections(siteid) {
        return this.get('GetCurrentClientConnections', {
            key: this.key,
            siteid,
        });
    }

    GetTotalPlaytime(start_time, end_time, siteid) {
        return this.get('GetTotalPlaytime', {
            key: this.key,
            start_time,
            end_time,
            siteid
        });
    }

}


module.exports = {ISiteLicenseService};