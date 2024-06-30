const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamEconomy
 * **/
class ISteamEconomy extends Base {

    constructor(key) {
        super(key, 'ISteamEconomy');
    }

    CanTrade(appid, steamid, targetid) {
        return this.get('CanTrade', {
            key: this.key,
            appid,
            steamid,
            targetid
        });
    }

    FinalizeAssetTransaction(appid, steamid, txnid, language) {
        return this.post('FinalizeAssetTransaction', {
            key: this.key,
            appid,
            steamid,
            txnid,
            language
        });
    }

    GetAssetClassInfo(appid, language, class_count, classid, instanceid) {
        return this.get('GetAssetClassInfo', {
            key: this.key,
            appid,
            language,
            classid,
            instanceid
        });
    }

    GetAssetPrices(appid, currency, language) {
        return this.get('GetAssetPrices', {
            key: this.key,
            appid,
            currency,
            language
        });
    }

    GetExportedAssetsForUser(steamid, appid, contextid) {
        return this.get('GetExportedAssetsForUser', {
            key: this.key,
            steamid,
            appid,
            contextid
        });
    }

    GetMarketPrices(appid) {
        return this.get('GetMarketPrices', {
            key: this.key,
            appid
        });
    }

    StartAssetTransaction(appid, steamid, assetid, assetquantity, currency, language, ipaddress, referrer, clientauth) {
        return this.post('StartAssetTransaction', {
            key: this.key,
            appid,
            steamid,
            assetid,
            assetquantity,
            currency,
            language,
            ipaddress,
            referrer,
            clientauth
        });
    }

    StartTrade(appid, partya, partyb) {
        return this.get('StartTrade', {
            key: this.key,
            appid,
            partya,
            partyb
        });
    }

}


module.exports = {ISteamEconomy};