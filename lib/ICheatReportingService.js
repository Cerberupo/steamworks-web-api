const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ICheatReportingService
 * **/
class ICheatReportingService extends Base {

    constructor(key) {
        super(key, 'ICheatReportingService');
    }

    ReportPlayerCheating(steamid, appid, steamidreporter, appdata, heuristic, detection, playerreport, noreportid, gamemode, suspicionstarttime, severity) {
        return this.post('ReportPlayerCheating', {
            key: this.key,
            appid,
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

    RequestPlayerGameBan(steamid, appid, reportid, cheatdescription, duration, delayban, flags) {
        return this.post('RequestPlayerGameBan', {
            key: this.key,
            appid,
            steamid,
            reportid,
            cheatdescription,
            duration,
            delayban,
            flags
        });
    }

    RemovePlayerGameBan(steamid, appid) {
        return this.post('RemovePlayerGameBan', {
            key: this.key,
            appid,
            steamid
        });
    }

    GetCheatingReports(appid, timeend, timebegin, reportidmin, includereports, includebans, steamid) {
        return this.get('GetCheatingReports', {
            key: this.key,
            appid,
            timeend,
            timebegin,
            reportidmin,
            includereports,
            includebans,
            steamid
        });
    }


    ReportCheatData(steamid, appid, pathandfilename, webcheaturl, time_now, time_started, time_stopped, cheatname, game_process_id, cheat_process_id, cheat_param_1, cheat_param_2) {
        return this.post('ReportCheatData', {
            key: this.key,
            appid,
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

    RequestVacStatusForUser(steamid, appid, session_id) {
        return this.post('RequestVacStatusForUser', {
            key: this.key,
            appid,
            steamid,
            session_id
        });
    }

    StartSecureMultiplayerSession(steamid, appid) {
        return this.post('StartSecureMultiplayerSession', {
            key: this.key,
            appid,
            steamid
        });
    }

    EndSecureMultiplayerSession(steamid, appid, session_id) {
        return this.post('EndSecureMultiplayerSession', {
            key: this.key,
            appid,
            steamid,
            session_id
        });
    }

}

module.exports = {ICheatReportingService};