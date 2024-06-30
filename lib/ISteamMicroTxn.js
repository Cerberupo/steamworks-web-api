const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamMicroTxn
 * **/
class ISteamMicroTxn extends Base {

    constructor(key) {
        super(key, 'ISteamMicroTxn');
    }

    AdjustAgreement(steamid, agreementid, appid, nextprocessdate, oldnextprocessdate) {
        return this.post('AdjustAgreement', {
            key: this.key,
            steamid,
            agreementid,
            appid,
            nextprocessdate,
            oldnextprocessdate
        });
    }

    CancelAgreement(steamid, agreementid, appid) {
        return this.post('CancelAgreement', {
            key: this.key,
            steamid,
            agreementid,
            appid
        });
    }

    FinalizeTxn(orderid, appid) {
        return this.post('FinalizeTxn', {
            key: this.key,
            orderid,
            appid
        }, undefined, 'v2');
    }

    GetReport(appid, type, time, maxresults) {
        return this.get('FinalizeTxn', {
            key: this.key,
            appid,
            type,
            time,
            maxresults
        }, undefined, 'v5');
    }

    GetUserAgreementInfo(steamid, appid) {
        return this.get('GetUserAgreementInfo', {
            key: this.key,
            steamid,
            appid,
        }, undefined, 'v2');
    }

    GetUserInfo(appid, steamid, ipaddress) {
        return this.get('GetUserInfo', {
            key: this.key,
            appid,
            steamid,
            ipaddress
        }, undefined, 'v2');
    }

    InitTxn(orderid, steamid, appid, itemcount, language, currency, usersession, ipaddress, itemid, qty, amount, description, category, associated_bundle, billingtype, startdate, enddate, period, frequency, recurringamt, bundlecount, bundleid, bundle_qty, bundle_desc, bundle_category) {
        return this.post('InitTxn', {
            key: this.key,
            orderid,
            steamid,
            appid,
            itemcount,
            language,
            currency,
            usersession,
            ipaddress,
            itemid,
            qty,
            amount,
            description,
            category,
            associated_bundle,
            billingtype,
            startdate,
            enddate,
            period,
            frequency,
            recurringamt,
            bundlecount,
            bundleid,
            bundle_qty,
            bundle_desc,
            bundle_category
        }, undefined, 'v3');
    }

    ProcessAgreement(orderid, steamid, agreementid, appid, amount, currency) {
        return this.post('ProcessAgreement', {
            key: this.key,
            orderid,
            steamid,
            agreementid,
            appid,
            amount,
            currency
        }, undefined, 'v1');
    }

    QueryTxn(appid, orderid, transid) {
        return this.get('QueryTxn', {
            key: this.key,
            appid,
            orderid,
            transid
        }, undefined, 'v3');
    }

    RefundTxn(orderid, appid) {
        return this.post('QueryTxn', {
            key: this.key,
            orderid,
            appid
        }, undefined, 'v2');
    }

}


module.exports = {ISteamMicroTxn};