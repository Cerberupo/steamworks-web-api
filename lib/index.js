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
    constructor(key) {
        this.IBroadcastService = new IBroadcastService(key);
        this.ICheatReportingService = new ICheatReportingService(key);
        this.IEconMarketService = new IEconMarketService(key);
        this.IEconService = new IEconService(key);
        this.IGameInventory = new IGameInventory(key);
        this.IGameNotificationsService = new IGameNotificationsService(key);
        this.IGameServersService = new IGameServersService(key);
        this.IInventoryService = new IInventoryService(key);
        this.ILobbyMatchmakingService = new ILobbyMatchmakingService(key);
        this.IPlayerService = new IPlayerService(key);
        this.IPublishedFileService = new IPublishedFileService(key);
        this.ISiteLicenseService = new ISiteLicenseService(key);
        this.ISteamApps = new ISteamApps(key);
        this.ISteamCommunity = new ISteamCommunity(key);
        this.ISteamEconomy = new ISteamEconomy(key);
        this.ISteamGameServerStats = new ISteamGameServerStats(key);
        this.ISteamLeaderboards = new ISteamLeaderboards(key);
        this.ISteamMicroTxn = new ISteamMicroTxn(key);
        this.ISteamMicroTxnSandbox = new ISteamMicroTxnSandbox(key);
        this.ISteamNews = new ISteamNews(key);
        this.ISteamPublishedItemSearch = new ISteamPublishedItemSearch(key);
        this.ISteamPublishedItemVoting = new ISteamPublishedItemVoting(key);
        this.ISteamRemoteStorage = new ISteamRemoteStorage(key);
        this.ISteamUserAuth = new ISteamUserAuth(key);
        this.ISteamUser = new ISteamUser(key);
        this.ISteamUserStats = new ISteamUserStats(key);
        this.ISteamWebAPIUtil = new ISteamWebAPIUtil(key);
        this.IWorkshopService = new IWorkshopService(key);
    }
}

module.exports = {SteamworksWebApi}