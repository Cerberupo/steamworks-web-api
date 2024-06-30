const {Base} = require("./base");

/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IBroadcastService
 * **/
class IBroadcastService extends Base {

    constructor(key) {
        super(key, 'IBroadcastService');
    }

    PostGameDataFrame(steamid, appid, broadcast_id, frame_data) {
        return this.post('PostGameDataFrame', {
            key: this.key,
            appid,
            steamid,
            broadcast_id,
            frame_data
        });
    }

}


module.exports = {IBroadcastService};