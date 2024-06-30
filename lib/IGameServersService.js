const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IGameServersService
 * **/
class IGameServersService extends Base {

    constructor(key) {
        super(key, 'IGameServersService');
        this.baseUrl = this.apiUrl;
    }

    GetAccountList() {
        return this.get('GetAccountList', {
            key: this.key,
        });
    }

    CreateAccount(appid, memo) {
        return this.post('CreateAccount', {
            key: this.key,
            appid,
            memo
        });
    }

    SetMemo(steamid, memo) {
        return this.post('SetMemo', {
            key: this.key,
            steamid,
            memo
        });
    }

    ResetLoginToken(steamid) {
        return this.post('ResetLoginToken', {
            key: this.key,
            steamid
        });
    }

    DeleteAccount(steamid) {
        return this.post('DeleteAccount', {
            key: this.key,
            steamid
        });
    }

    GetAccountPublicInfo(steamid) {
        return this.get('GetAccountPublicInfo', {
            key: this.key,
            steamid
        });
    }

    QueryLoginToken(login_token) {
        return this.get('QueryLoginToken', {
            key: this.key,
            login_token
        });
    }

    GetServerSteamIDsByIP(server_ips) {
        return this.get('GetServerSteamIDsByIP', {
            key: this.key,
            server_ips
        });
    }

    GetServerIPsBySteamID(server_steamids) {
        return this.get('GetServerIPsBySteamID', {
            key: this.key,
            server_steamids
        });
    }

}


module.exports = {IGameServersService};