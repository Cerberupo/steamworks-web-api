/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IBroadcastService
 * **/
class Base {

    // Steamworks Web API publisher authentication key.
    constructor(key, appid, interfaceName, version = 'v1', baseUrl = 'https://partner.steam-api.com') {
        this.key = key;
        this.appid = appid;
        this.interface = interfaceName;
        this.version = version;
        this.baseUrl = baseUrl;
    }

    url(action) {
        return `${this.baseUrl}/${this.interface}/${action}/${this.version}`;
    }

    async request(action, method, body = {}, params = {}) {
        const response = await fetch(`${this.url(action)}?${new URLSearchParams(params).toString()}`, {
            method,
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(this.getObject(body))
        });
        return response.json();
    }


    get(action, params) {
        return this.request(action, 'GET', undefined, params);
    }

    post(action, body, params) {
        return this.request(action, 'POST', body, params);
    }

    put(action, body, params) {
        return this.request(action, 'POST', body, params);
    }

    patch(action, body, params) {
        return this.request(action, 'PATCH', body, params);
    }

    delete(action, params) {
        return this.request(action, 'DELETE', undefined, params);
    }

    getObject(obj) {
        return Object.entries(obj)
            .filter(([key, value]) => value !== undefined)
            .reduce((obj, [key, value]) => {
                obj[key] = value;
                return obj;
            }, {});
    }

}

module.exports = {Base};