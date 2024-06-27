const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IBroadcastService
 * **/
export class IBroadcastService extends Base {

    constructor(key, appid) {
        super(key, appid, 'IBroadcastService');
    }

    PostGameDataFrame(steamid, broadcast_id, frame_data) {
        return this.post('PostGameDataFrame', {
            key: this.key,
            appid: this.appid,
            steamid,
            broadcast_id,
            frame_data
        });
    }

}