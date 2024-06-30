const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamPublishedItemSearch
 * **/
class ISteamPublishedItemSearch extends Base {

    constructor(key) {
        super(key, 'ISteamPublishedItemSearch ');
    }

    RankedByPublicationOrder(steamid, appid, startidx, count, tagcount, usertagcount, hasappadminaccess, fileType, tag, usertag) {
        return this.post('RankedByPublicationOrder', {
            key: this.key,
            steamid,
            appid,
            startidx,
            count,
            tagcount,
            usertagcount,
            hasappadminaccess,
            fileType,
            tag,
            usertag
        });
    }

    RankedByTrend(steamid, appid, startidx, count, tagcount, usertagcount, hasappadminaccess, fileType, days, tag, usertag) {
        return this.post('RankedByTrend', {
            key: this.key,
            steamid,
            appid,
            startidx,
            count,
            tagcount,
            usertagcount,
            hasappadminaccess,
            fileType,
            days,
            tag,
            usertag
        });
    }

    RankedByVote(steamid, appid, startidx, count, tagcount, usertagcount, hasappadminaccess, fileType, tag, usertag) {
        return this.post('RankedByVote', {
            key: this.key,
            steamid,
            appid,
            startidx,
            count,
            tagcount,
            usertagcount,
            hasappadminaccess,
            fileType,
            tag,
            usertag
        });
    }

    ResultSetSummary(steamid, appid, tagcount, usertagcount, hasappadminaccess, fileType, tag, usertag) {
        return this.post('ResultSetSummary', {
            key: this.key,
            steamid,
            appid,
            tagcount,
            usertagcount,
            hasappadminaccess,
            fileType,
            tag,
            usertag
        });
    }

}


module.exports = {ISteamPublishedItemSearch};