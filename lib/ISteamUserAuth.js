const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamUserAuth
 * **/
class ISteamUserAuth extends Base {

    constructor(key) {
        super(key, 'ISteamUserAuth');
    }

    AuthenticateUser(steamid, sessionkey, encrypted_loginkey) {
        return this.post('AuthenticateUser', {
            steamid,
            sessionkey,
            encrypted_loginkey
        });
    }

    AuthenticateUserTicket(appid, ticket, identity) {
        return this.get('AuthenticateUserTicket', {
            key: this.key,
            appid,
            ticket,
            identity
        });
    }

}


module.exports = {ISteamUserAuth};