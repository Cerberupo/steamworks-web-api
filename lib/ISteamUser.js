const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamUser
 * **/
class ISteamUser extends Base {

    constructor(key) {
        super(key, 'ISteamUser');
    }

    CheckAppOwnership(steamid, appid) {
        return this.get('CheckAppOwnership', {
            key: this.key,
            steamid,
            appid
        });
    }

    GetAppPriceInfo(steamid, appids) {
        return this.get('GetAppPriceInfo', {
            key: this.key,
            steamid,
            appids
        });
    }

    GetDeletedSteamIDs(rowversion) {
        return this.get('GetDeletedSteamIDs', {
            key: this.key,
            rowversion
        });
    }

    GetFriendList(steamid, relationship) {
        return this.get('GetFriendList', {
            key: this.key,
            steamid,
            relationship
        });
    }

    GetPlayerBans(steamids) {
        return this.get('GetPlayerBans', {
            key: this.key,
            steamids
        });
    }

    GetPlayerSummaries(steamids) {
        return this.get('GetPlayerSummaries', {
            key: this.key,
            steamids
        }, 'v2');
    }

    GetPublisherAppOwnership(steamid) {
        return this.get('GetPublisherAppOwnership', {
            key: this.key,
            steamid
        }, 'v3');
    }

    GetPublisherAppOwnershipChanges(packagerowversion, cdkeyrowversion) {
        return this.get('GetPublisherAppOwnershipChanges', {
            key: this.key,
            packagerowversion,
            cdkeyrowversion
        });
    }

    GetUserGroupList(steamid) {
        return this.get('GetUserGroupList', {
            key: this.key,
            steamid
        });
    }

    ResolveVanityURL(vanityurl, url_type) {
        return this.get('ResolveVanityURL', {
            key: this.key,
            vanityurl,
            url_type
        });
    }

}


module.exports = {ISteamUser};