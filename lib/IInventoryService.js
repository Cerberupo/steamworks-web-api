const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IInventoryService
 * **/
class IInventoryService extends Base {

    constructor(key) {
        super(key, 'IInventoryService');
    }

    AddItem(appid, itemdefid, itempropsjson, steamid, notify, requestid, trade_restriction) {
        return this.post('AddItem', {
            key: this.key,
            appid,
            itemdefid,
            itempropsjson,
            steamid,
            notify,
            requestid,
            trade_restriction
        });
    }

    AddPromoItem(appid, itemdefid, steamid, notify, requestid) {
        return this.post('AddPromoItem', {
            key: this.key,
            appid,
            itemdefid,
            steamid,
            notify,
            requestid
        });
    }

    ConsumeItem(appid, itemid, quantity, steamid, requestid) {
        return this.post('ConsumeItem', {
            key: this.key,
            appid,
            itemid,
            quantity,
            steamid,
            requestid
        });
    }

    ExchangeItem(appid, steamid, materialsitemid, materialsquantity, outputitemdefid) {
        return this.post('ExchangeItem', {
            key: this.key,
            appid,
            steamid,
            materialsitemid,
            materialsquantity,
            outputitemdefid
        });
    }

    GetInventory(appid, steamid) {
        return this.get('GetInventory', {
            key: this.key,
            appid,
            steamid
        });
    }

    GetItemDefs(appid, modifiedsince, itemdefids, workshopids, cache_max_age_seconds) {
        return this.get('GetItemDefs', {
            key: this.key,
            appid,
            modifiedsince,
            itemdefids,
            workshopids,
            cache_max_age_seconds
        });
    }

    GetPriceSheet(ecurrency) {
        return this.get('GetPriceSheet', {
            key: this.key,
            ecurrency
        });
    }

    Consolidate(appid, steamid, itemdefid, force) {
        return this.post('Consolidate', {
            key: this.key,
            appid,
            steamid,
            itemdefid,
            force
        });
    }

    GetQuantity(appid, steamid, itemdefid, force) {
        return this.get('GetQuantity', {
            key: this.key,
            appid,
            steamid,
            itemdefid,
            force
        });
    }

    ModifyItems(appid, input_json, steamid, timestamp, updates) {
        return this.post('ModifyItems', {
            key: this.key,
            appid,
            input_json,
            steamid,
            timestamp,
            updates
        });
    }

}


module.exports = {IInventoryService};