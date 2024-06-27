import {Base} from "./base";

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IBroadcastService
 * **/
export class ILobbyMatchmakingService extends Base {

    constructor(key, appid) {
        super(key, appid, 'ILobbyMatchmakingService');
    }

    CreateLobby(max_members, lobby_type, lobby_name, input_json, steamid_invited_members, lobby_metadata) {
        return this.post('CreateLobby', {
            key: this.key,
            appid: this.appid,
            max_members,
            lobby_type,
            lobby_name,
            input_json,
            steamid_invited_members,
            lobby_metadata
        });
    }

    RemoveUserFromLobby(steamid_to_remove, steamid_lobby, input_json) {
        return this.post('RemoveUserFromLobby', {
            key: this.key,
            appid: this.appid,
            steamid_to_remove,
            steamid_lobby,
            input_json
        });
    }

    GetLobbyData(steamid_lobby) {
        return this.get('GetLobbyData', {
            key: this.key,
            appid: this.appid,
            steamid_lobby
        });
    }

}