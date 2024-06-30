const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IEconService
 * **/
class IEconService extends Base {

    constructor(key) {
        super(key, 'IEconService');
    }

    GetTradeHistory(max_trades, start_after_time, start_after_tradeid, navigating_back, get_descriptions, language, include_failed, include_total) {
        return this.get('GetTradeHistory', {
            key: this.key,
            max_trades,
            start_after_time,
            start_after_tradeid,
            navigating_back,
            get_descriptions,
            language,
            include_failed,
            include_total
        });
    }

    FlushInventoryCache(steamid, appid, contextid) {
        return this.post('FlushInventoryCache', {
            key: this.key,
            steamid,
            appid,
            contextid
        });
    }

    FlushAssetAppearanceCache(appid) {
        return this.post('FlushAssetAppearanceCache', {
            key: this.key,
            appid,
        });
    }

    FlushContextCache(appid) {
        return this.post('FlushContextCache', {
            key: this.key,
            appid,
        });
    }

    GetTradeOffers(get_sent_offers, get_received_offers, get_descriptions, language, active_only, historical_only, time_historical_cutoff) {
        return this.get('GetTradeOffers', {
            key: this.key,
            get_sent_offers,
            get_received_offers,
            get_descriptions,
            language,
            active_only,
            historical_only,
            time_historical_cutoff
        });
    }

    GetTradeOffer(tradeofferid, language) {
        return this.get('GetTradeOffer', {
            key: this.key,
            tradeofferid,
            language,
        });
    }

    GetTradeOffersSummary(time_last_visit) {
        return this.get('GetTradeOffersSummary', {
            key: this.key,
            time_last_visit
        });
    }

}


module.exports = {IEconService};