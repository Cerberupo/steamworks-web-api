const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IGameInventory
 * **/
class IGameInventory extends Base {

    constructor(key) {
        super(key, 'IGameInventory');
    }

    GetHistoryCommandDetails(appid, steamid, command, contextid, _arguments) {
        return this.get('GetHistoryCommandDetails', {
            key: this.key,
            appid,
            steamid,
            command,
            contextid,
            arguments: _arguments
        });
    }

    GetUserHistory(appid, steamid, contextid, starttime, endtime) {
        return this.get('GetUserHistory', {
            key: this.key,
            appid,
            steamid,
            contextid,
            starttime,
            endtime
        });
    }

    HistoryExecuteCommands(appid, steamid, contextid, actorid) {
        return this.post('HistoryExecuteCommands', {
            key: this.key,
            appid,
            steamid,
            contextid,
            actorid
        });
    }

    SupportGetAssetHistory(appid, assetid, contextid) {
        return this.get('SupportGetAssetHistory', {
            key: this.key,
            appid,
            assetid,
            contextid
        });
    }

    UpdateItemDefs(appid, itemdefs) {
        return this.post('UpdateItemDefs', {
            key: this.key,
            appid,
            itemdefs
        });
    }

}


module.exports = {IGameInventory};