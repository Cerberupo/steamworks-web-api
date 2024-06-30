const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamNews
 * **/
class ISteamNews extends Base {

    constructor(key) {
        super(key, 'ISteamNews', 'v2');
    }

    GetNewsForApp(appid, maxlength, enddate, count, feeds) {
        return this.get('GetNewsForApp', {
            appid,
            maxlength,
            enddate,
            count,
            feeds
        }, undefined, this.apiUrl);
    }

    GetNewsForAppAuthed(appid, maxlength, enddate, count, feeds) {
        return this.get('GetNewsForAppAuthed', {
            key: this.key,
            appid,
            maxlength,
            enddate,
            count,
            feeds
        });
    }

}


module.exports = {ISteamNews};