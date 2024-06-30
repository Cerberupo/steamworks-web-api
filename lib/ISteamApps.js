const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamApps
 * **/
class ISteamApps extends Base {

    constructor(key) {
        super(key, 'ISteamApps');
    }

    GetAppBetas(appid) {
        return this.get('GetAppBetas', {
            key: this.key,
            appid
        });
    }

    GetAppBuilds(appid, count) {
        return this.get('GetAppBuilds', {
            key: this.key,
            appid,
            count
        });
    }

    GetAppDepotVersions(appid) {
        return this.get('GetAppDepotVersions', {
            key: this.key,
            appid
        });
    }

    GetAppList(appid) {
        return this.get('GetAppList', undefined, 'v2', this.apiUrl);
    }

    GetPartnerAppListForWebAPIKey(type_filter) {
        return this.get('GetPartnerAppListForWebAPIKey', {
            key: this.key,
            type_filter
        }, 'v2');
    }

    GetPlayersBanned(appid) {
        return this.get('GetPlayersBanned', {
            key: this.key,
            appid
        });
    }

    GetServerList(filter, limit) {
        return this.get('GetServerList', {
            key: this.key,
            filter,
            limit
        });
    }

    GetServersAtAddress(addr) {
        return this.get('GetServersAtAddress', {
            addr
        }, undefined, this.apiUrl);
    }

    SetAppBuildLive(appid, buildid, betakey, steamid, description) {
        return this.post('SetAppBuildLive', {
            key: this.key,
            appid,
            buildid,
            betakey,
            steamid,
            description
        }, undefined, 'v2');
    }

    UpToDateCheck(appid, version) {
        return this.get('UpToDateCheck', {
            appid,
            version
        }, this.apiUrl);
    }

}


module.exports = {ISteamApps};