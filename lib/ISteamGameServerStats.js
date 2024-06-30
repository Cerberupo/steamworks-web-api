const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamGameServerStats
 * **/
class ISteamGameServerStats extends Base {

    constructor(key) {
        super(key, 'ISteamGameServerStats');
    }

    GetGameServerPlayerStatsForGame(gameid, appid, rangestart, rangeend, maxresults) {
        return this.get('GetGameServerPlayerStatsForGame', {
            key: this.key,
            gameid,
            appid,
            rangestart,
            rangeend,
            maxresults
        });
    }

}


module.exports = {ISteamGameServerStats};