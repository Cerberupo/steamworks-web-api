const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IEconMarketService
 * **/
class IEconMarketService extends Base {

    constructor(key) {
        super(key, 'IEconMarketService');
    }

    GetMarketEligibility(steamid) {
        return this.get('GetMarketEligibility', {
            key: this.key,
            steamid
        });
    }

    CancelAppListingsForUser(appid, steamid, synchronous) {
        return this.post('CancelAppListingsForUser', {
            key: this.key,
            appid,
            steamid,
            synchronous
        });
    }

    GetAssetID(appid, listingid) {
        return this.get('GetAssetID', {
            key: this.key,
            appid,
            listingid
        });
    }

    GetPopular(language, rows, start, filter_appid, ecurrency) {
        return this.get('GetPopular', {
            key: this.key,
            language,
            rows,
            start,
            filter_appid,
            ecurrency
        });
    }

}


module.exports = {IEconMarketService};