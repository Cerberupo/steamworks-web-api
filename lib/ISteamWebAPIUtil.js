const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamWebAPIUtil
 * **/
class ISteamWebAPIUtil extends Base {

    constructor(key) {
        super(key, 'ISteamWebAPIUtil');
    }

    GetServerInfo() {
        return this.get('GetServerInfo');
    }

    GetSupportedAPIList() {
        return this.get('GetSupportedAPIList', {
            key: this.key
        });
    }

}


module.exports = {ISteamWebAPIUtil};