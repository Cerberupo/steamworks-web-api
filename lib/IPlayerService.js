const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IBroadcastService
 * **/
class IPlayerService extends Base {

    constructor(key, appid) {
        super(key, appid, 'IPlayerService');
    }

    GetRecentlyPlayedGames(steamid, count) {
        return this.get('GetRecentlyPlayedGames', {
            key: this.key,
            appid: this.appid,
            steamid,
            count
        });
    }

    GetSingleGamePlaytime(appid, steamid) {
        return this.get('GetSingleGamePlaytime', {
            key: this.key,
            appid,
            steamid
        });
    }

    GetOwnedGames(steamid, include_appinfo, include_played_free_games, appids_filter) {
        return this.get('GetOwnedGames', {
            key: this.key,
            steamid,
            include_appinfo,
            include_played_free_games,
            appids_filter
        });
    }

    GetSteamLevel(steamid) {
        return this.get('GetSteamLevel', {
            key: this.key,
            steamid,
        });
    }

    GetBadges(steamid) {
        return this.get('GetBadges', {
            key: this.key,
            steamid,
        });
    }

    GetCommunityBadgeProgress(steamid, badgeid) {
        return this.get('GetCommunityBadgeProgress', {
            key: this.key,
            steamid,
            badgeid,
        });
    }

}

module.exports = {IPlayerService};