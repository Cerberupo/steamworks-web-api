const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/ILobbyMatchmakingService
 * **/
class ILobbyMatchmakingService extends Base {

    constructor(key) {
        super(key, 'ILobbyMatchmakingService');
    }

    CreateLobby(appid, max_members, lobby_type, lobby_name, input_json, steamid_invited_members, lobby_metadata) {
        return this.post('CreateLobby', {
            key: this.key,
            appid,
            max_members,
            lobby_type,
            lobby_name,
            input_json,
            steamid_invited_members,
            lobby_metadata
        });
    }

    RemoveUserFromLobby(appid, steamid_to_remove, steamid_lobby, input_json) {
        return this.post('RemoveUserFromLobby', {
            key: this.key,
            appid,
            steamid_to_remove,
            steamid_lobby,
            input_json
        });
    }

    GetLobbyData(appid, steamid_lobby) {
        return this.get('GetLobbyData', {
            key: this.key,
            appid,
            steamid_lobby
        });
    }

}


module.exports = {ILobbyMatchmakingService};