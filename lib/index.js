import {IBroadcastService} from "./IBroadcastService";
import {ILobbyMatchmakingService} from "./ILobbyMatchmakingService";
import {ICheatReportingService} from "./ICheatReportingService";

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi
 * **/
export class SteamworksWebApi {

    // Steamworks Web API publisher authentication key.
    constructor(key, appid) {
        this.IBroadcastService = new IBroadcastService(key, appid);
        this.ILobbyMatchmakingService = new ILobbyMatchmakingService(key, appid);
        this.ICheatReportingService = new ICheatReportingService(key, appid);
    }
}