const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IBroadcastService
 * **/
class ICheatReportingService extends Base {

    constructor(key, appid) {
        super(key, appid, 'ICheatReportingService');
    }

    ReportPlayerCheating(steamid, steamidreporter, appdata, heuristic, detection, playerreport, noreportid, gamemode, suspicionstarttime, severity) {
        return this.post('ReportPlayerCheating', {
            key: this.key,
            appid: this.appid,
            steamid,
            steamidreporter,
            appdata,
            heuristic,
            detection,
            playerreport,
            noreportid,
            gamemode,
            suspicionstarttime,
            severity
        });
    }

    RequestPlayerGameBan(steamid, reportid, cheatdescription, duration, delayban, flags) {
        return this.post('RequestPlayerGameBan', {
            key: this.key,
            appid: this.appid,
            steamid,
            reportid,
            cheatdescription,
            duration,
            delayban,
            flags
        });
    }

    RemovePlayerGameBan(steamid) {
        return this.post('RemovePlayerGameBan', {
            key: this.key,
            appid: this.appid,
            steamid
        });
    }

    GetCheatingReports(timeend, timebegin, reportidmin, includereports, includebans, steamid) {
        return this.get('GetCheatingReports', {
            key: this.key,
            appid: this.appid,
            timeend,
            timebegin,
            reportidmin,
            includereports,
            includebans,
            steamid
        });
    }


    ReportCheatData(steamid, pathandfilename, webcheaturl, time_now, time_started, time_stopped, cheatname, game_process_id, cheat_process_id, cheat_param_1, cheat_param_2) {
        return this.post('ReportCheatData', {
            key: this.key,
            appid: this.appid,
            steamid,
            pathandfilename,
            webcheaturl,
            time_now,
            time_started,
            time_stopped,
            cheatname,
            game_process_id,
            cheat_process_id,
            cheat_param_1,
            cheat_param_2
        });
    }

    RequestVacStatusForUser(steamid, session_id) {
        return this.post('RequestVacStatusForUser', {
            key: this.key,
            appid: this.appid,
            steamid,
            session_id
        });
    }

    StartSecureMultiplayerSession(steamid) {
        return this.post('StartSecureMultiplayerSession', {
            key: this.key,
            appid: this.appid,
            steamid
        });
    }

    EndSecureMultiplayerSession(steamid, session_id) {
        return this.post('EndSecureMultiplayerSession', {
            key: this.key,
            appid: this.appid,
            steamid,
            session_id
        });
    }

}

module.exports = {ICheatReportingService};