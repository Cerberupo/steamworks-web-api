const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamPublishedItemVoting
 * **/
class ISteamPublishedItemVoting extends Base {

    constructor(key) {
        super(key, 'ISteamPublishedItemVoting ');
    }

    ItemVoteSummary(steamid, appid, count, publishedfileid) {
        return this.post('ItemVoteSummary', {
            key: this.key,
            steamid,
            appid,
            count,
            publishedfileid
        });
    }

    UserVoteSummary(steamid, count, publishedfileid) {
        return this.post('UserVoteSummary', {
            key: this.key,
            steamid,
            count,
            publishedfileid
        });
    }

}


module.exports = {ISteamPublishedItemVoting};