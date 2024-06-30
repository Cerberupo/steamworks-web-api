const {IBroadcastService} = require("./IBroadcastService");
const {ILobbyMatchmakingService} = require("./ILobbyMatchmakingService");
const {ICheatReportingService} = require("./ICheatReportingService");
const {IPlayerService} = require("./IPlayerService");
const {ISteamUser} = require("./ISteamUser");
const {ISteamUserAuth} = require("./ISteamUserAuth");
const {ISteamUserStats} = require("./ISteamUserStats");
const {ISteamWebAPIUtil} = require("./ISteamWebAPIUtil");
const {IWorkshopService} = require("./IWorkshopService");
const {ISteamRemoteStorage} = require("./ISteamRemoteStorage");
const {ISteamPublishedItemVoting} = require("./ISteamPublishedItemVoting");
const {ISteamPublishedItemSearch} = require("./ISteamPublishedItemSearch");
const {ISteamNews} = require("./ISteamNews");
const {ISteamMicroTxnSandbox} = require("./ISteamMicroTxnSandbox");
const {ISteamMicroTxn} = require("./ISteamMicroTxn");
const {ISteamLeaderboards} = require("./ISteamLeaderboards");
const {ISteamGameServerStats} = require("./ISteamGameServerStats");
const {ISteamEconomy} = require("./ISteamEconomy");
const {ISteamCommunity} = require("./ISteamCommunity");
const {ISteamApps} = require("./ISteamApps");
const {ISiteLicenseService} = require("./ISiteLicenseService");
const {IPublishedFileService} = require("./IPublishedFileService");
const {IInventoryService} = require("./IInventoryService");
const {IGameServersService} = require("./IGameServersService");
const {IGameNotificationsService} = require("./IGameNotificationsService");
const {IGameInventory} = require("./IGameInventory");
const {IEconService} = require("./IEconService");
const {IEconMarketService} = require("./IEconMarketService");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi
 * **/
class SteamworksWebApi {

    // Steamworks Web API publisher authentication key.
    constructor(key, appid) {
        this.IBroadcastService = new IBroadcastService(key, appid);
        this.ICheatReportingService = new ICheatReportingService(key, appid);
        this.IEconMarketService = new IEconMarketService(key, appid);
        this.IEconService = new IEconService(key, appid);
        this.IGameInventory = new IGameInventory(key, appid);
        this.IGameNotificationsService = new IGameNotificationsService(key, appid);
        this.IGameServersService = new IGameServersService(key, appid);
        this.IInventoryService = new IInventoryService(key, appid);
        this.ILobbyMatchmakingService = new ILobbyMatchmakingService(key, appid);
        this.IPlayerService = new IPlayerService(key, appid);
        this.IPublishedFileService = new IPublishedFileService(key, appid);
        this.ISiteLicenseService = new ISiteLicenseService(key, appid);
        this.ISteamApps = new ISteamApps(key, appid);
        this.ISteamCommunity = new ISteamCommunity(key, appid);
        this.ISteamEconomy = new ISteamEconomy(key, appid);
        this.ISteamGameServerStats = new ISteamGameServerStats(key, appid);
        this.ISteamLeaderboards = new ISteamLeaderboards(key, appid);
        this.ISteamMicroTxn = new ISteamMicroTxn(key, appid);
        this.ISteamMicroTxnSandbox = new ISteamMicroTxnSandbox(key, appid);
        this.ISteamNews = new ISteamNews(key, appid);
        this.ISteamPublishedItemSearch = new ISteamPublishedItemSearch(key, appid);
        this.ISteamPublishedItemVoting = new ISteamPublishedItemVoting(key, appid);
        this.ISteamRemoteStorage = new ISteamRemoteStorage(key, appid);
        this.ISteamUserAuth = new ISteamUserAuth(key, appid);
        this.ISteamUser = new ISteamUser(key, appid);
        this.ISteamUserStats = new ISteamUserStats(key, appid);
        this.ISteamWebAPIUtil = new ISteamWebAPIUtil(key, appid);
        this.IWorkshopService = new IWorkshopService(key, appid);
    }
}

module.exports = {SteamworksWebApi}