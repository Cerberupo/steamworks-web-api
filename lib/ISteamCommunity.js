const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamCommunity
 * **/
class ISteamCommunity extends Base {

    constructor(key) {
        super(key, 'ISteamCommunity');
    }

    ReportAbuse(steamidActor, steamidTarget, appid, abuseType, contentType, description, gid) {
        return this.post('ReportAbuse', {
            key: this.key,
            steamidActor,
            steamidTarget,
            appid,
            abuseType,
            contentType,
            description,
            gid
        });
    }

}


module.exports = {ISteamCommunity};