const {IBroadcastService} = require("./IBroadcastService");
const {ILobbyMatchmakingService} = require("./ILobbyMatchmakingService");
const {ICheatReportingService} = require("./ICheatReportingService");
const {IPlayerService} = require("./IPlayerService");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi
 * **/
class SteamworksWebApi {

    // Steamworks Web API publisher authentication key.
    constructor(key, appid) {
        this.IBroadcastService = new IBroadcastService(key, appid);
        this.ILobbyMatchmakingService = new ILobbyMatchmakingService(key, appid);
        this.ICheatReportingService = new ICheatReportingService(key, appid);
        this.IPlayerService = new IPlayerService(key, appid);
    }
}

module.exports = {SteamworksWebApi}