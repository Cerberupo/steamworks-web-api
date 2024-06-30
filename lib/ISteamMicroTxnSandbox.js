const {ISteamMicroTxn} = require("./ISteamMicroTxn");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ISteamMicroTxnSandbox
 * **/
class ISteamMicroTxnSandbox extends ISteamMicroTxn {

    constructor(key) {
        super(key, 'ISteamMicroTxnSandbox');
    }

}


module.exports = {ISteamMicroTxnSandbox};