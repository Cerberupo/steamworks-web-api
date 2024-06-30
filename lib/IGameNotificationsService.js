const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IGameNotificationsService
 * **/
class IGameNotificationsService extends Base {

    constructor(key) {
        super(key, 'IGameNotificationsService');
    }

    CreateSession(appid, context, title, users, steamid) {
        return this.post('CreateSession', {
            key: this.key,
            appid,
            context,
            title,
            users,
            steamid
        });
    }

    UpdateSession(sessionid, appid, title, users, steamid) {
        return this.post('UpdateSession', {
            key: this.key,
            sessionid,
            appid,
            title,
            users,
            steamid
        });
    }

    EnumerateSessionsForApp(appid, steamid, include_all_user_messages, include_auth_user_message, language) {
        return this.get('EnumerateSessionsForApp', {
            key: this.key,
            appid,
            steamid,
            include_all_user_messages,
            include_auth_user_message,
            language
        });
    }

    GetSessionDetailsForApp(sessions, appid, language) {
        return this.get('GetSessionDetailsForApp', {
            key: this.key,
            sessions,
            appid,
            language
        });
    }

    RequestNotifications(steamid, appid) {
        return this.post('RequestNotifications', {
            key: this.key,
            steamid,
            appid
        });
    }

    DeleteSessionBatch(sessionid, appid) {
        return this.post('DeleteSessionBatch', {
            key: this.key,
            sessionid,
            appid
        });
    }

}


module.exports = {IGameNotificationsService};