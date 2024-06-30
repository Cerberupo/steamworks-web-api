const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamLeaderboards
 * **/
class ISteamLeaderboards extends Base {

    constructor(key) {
        super(key, 'ISteamLeaderboards');
    }

    DeleteLeaderboard(appid, name) {
        return this.post('DeleteLeaderboard', {
            key: this.key,
            appid,
            name
        });
    }

    FindOrCreateLeaderboard(appid, name, sortmethod, displaytype, createifnotfound, onlytrustedwrites, onlyfriendsreads) {
        return this.post('FindOrCreateLeaderboard', {
            key: this.key,
            appid,
            name,
            sortmethod,
            displaytype,
            createifnotfound,
            onlytrustedwrites,
            onlyfriendsreads
        }, undefined, 'v2');
    }

    GetLeaderboardEntries(appid, rangestart, rangeend, steamid, leaderboardid, datarequest) {
        return this.get('GetLeaderboardEntries', {
            key: this.key,
            appid,
            rangestart,
            rangeend,
            steamid,
            leaderboardid,
            datarequest
        });
    }

    GetLeaderboardsForGame(appid) {
        return this.get('GetLeaderboardsForGame', {
            key: this.key,
            appid
        }, 'v2');
    }

    ResetLeaderboard(appid, leaderboardid) {
        return this.post('ResetLeaderboard', {
            key: this.key,
            appid,
            leaderboardid
        });
    }

    SetLeaderboardScore(appid, leaderboardid, steamid, score, scoremethod, details) {
        return this.post('SetLeaderboardScore', {
            key: this.key,
            appid,
            leaderboardid,
            steamid,
            score,
            scoremethod,
            details
        });
    }

}


module.exports = {ISteamLeaderboards};