const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamUserStats
 * **/
class ISteamUserStats extends Base {

    constructor(key) {
        super(key, 'ISteamUserStats');
    }

    GetGlobalAchievementPercentagesForApp(gameid) {
        return this.get('GetGlobalAchievementPercentagesForApp', {
            gameid
        }, 'v2');
    }

    GetGlobalStatsForGame(appid, count, name, startdate, enddate) {
        return this.get('GetGlobalStatsForGame', {
            appid,
            count,
            name,
            startdate,
            enddate
        });
    }

    GetNumberOfCurrentPlayers(appid) {
        return this.get('GetNumberOfCurrentPlayers', {
            appid
        });
    }

    GetPlayerAchievements(steamid, appid, l) {
        return this.get('GetPlayerAchievements', {
            key: this.key,
            steamid,
            appid,
            l
        });
    }

    GetSchemaForGame(appid, l) {
        return this.get('GetSchemaForGame', {
            key: this.key,
            appid,
            l
        }, 'v2');
    }

    GetUserStatsForGame(steamid, appid) {
        return this.get('GetUserStatsForGame', {
            key: this.key,
            steamid,
            appid
        }, 'v2');
    }

    SetUserStatsForGame(steamid, appid, count, name, value) {
        return this.post('SetUserStatsForGame', {
            key: this.key,
            steamid,
            appid,
            count,
            name,
            value
        });
    }

}


module.exports = {ISteamUserStats};