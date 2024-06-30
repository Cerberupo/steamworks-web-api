const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamRemoteStorage
 * **/
class ISteamRemoteStorage extends Base {

    constructor(key) {
        super(key, 'ISteamRemoteStorage');
    }

    EnumerateUserSubscribedFiles(steamid, appid, listtype) {
        return this.post('EnumerateUserSubscribedFiles', {
            key: this.key,
            steamid,
            appid,
            listtype
        });
    }

    GetCollectionDetails(collectioncount, publishedfileids) {
        return this.post('GetCollectionDetails', {
            collectioncount,
            publishedfileids
        }, undefined, undefined, this.apiUrl);
    }

    GetPublishedFileDetails(itemcount, publishedfileids) {
        return this.post('GetPublishedFileDetails', {
            itemcount,
            publishedfileids
        }, undefined, undefined, this.apiUrl);
    }

    GetUGCFileDetails(steamid, ugcid, appid) {
        return this.get('GetUGCFileDetails', {
            key: this.key,
            steamid,
            ugcid,
            appid
        }, undefined, undefined, this.apiUrl);
    }

    SetUGCUsedByGC(steamid, ugcid, appid, used) {
        return this.post('SetUGCUsedByGC', {
            key: this.key,
            steamid,
            ugcid,
            appid,
            used
        });
    }

    SubscribePublishedFile(steamid, appid, publishedfileid) {
        return this.post('SubscribePublishedFile', {
            key: this.key,
            steamid,
            appid,
            publishedfileid
        });
    }

    UnsubscribePublishedFile(steamid, appid, publishedfileid) {
        return this.post('UnsubscribePublishedFile', {
            key: this.key,
            steamid,
            appid,
            publishedfileid
        });
    }
}


module.exports = {ISteamRemoteStorage};