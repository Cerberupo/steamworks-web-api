const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IWorkshopService
 * **/
class IWorkshopService extends Base {

    constructor(key) {
        super(key, 'IWorkshopService');
    }

    SetItemPaymentRules(appid, gameitemid, associated_workshop_files, partner_accounts, validate_only, make_workshop_files_subscribable) {
        return this.post('SetItemPaymentRules', {
            key: this.key,
            appid,
            gameitemid,
            associated_workshop_files,
            partner_accounts,
            validate_only,
            make_workshop_files_subscribable
        });
    }

    GetFinalizedContributors(appid, gameitemid) {
        return this.get('GetFinalizedContributors', {
            key: this.key,
            appid,
            gameitemid
        });
    }

    GetItemDailyRevenue(appid, item_id, date_start, date_end) {
        return this.get('GetItemDailyRevenue', {
            key: this.key,
            appid,
            item_id,
            date_start,
            date_end
        });
    }

    PopulateItemDescriptions(appid, languages) {
        return this.post('PopulateItemDescriptions', {
            key: this.key,
            appid,
            languages
        });
    }

}


module.exports = {IWorkshopService};