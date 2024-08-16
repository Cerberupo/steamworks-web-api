/**
 * Steam documentation
 * https://partner.steamgames.com/doc/webapi/IBroadcastService
 * **/
class Base {

    // Steamworks Web API publisher authentication key.
    constructor(key, interfaceName, version = 'v1') {
        this.key = key;
        this.interface = interfaceName;
        this.version = version;
        this.partnerUrl = 'https://partner.steam-api.com';
        this.apiUrl = 'https://api.steampowered.com';
        this.baseUrl = this.partnerUrl;
    }

    url(action, version, baseUrl) {
        return `${baseUrl || this.baseUrl}/${this.interface}/${action}/${version || this.version}`;
    }

    async request(action, method, body = {}, params = {}, version, baseUrl) {
        const init = {
            method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: this.getBody(body).toString()
        };
        if (method === 'GET') {
            delete init.body;
        }
        const url = `${this.url(action, version, baseUrl)}?${this.paramsToUrl(params)}`;
        const response = await fetch(url, init);
        return response.json();
    }

    paramsToUrl(params = {}) {
        return new URLSearchParams(params).toString();
    }

    get(action, params, version, baseUrl) {
        return this.request(action, 'GET', undefined, params, version, baseUrl);
    }

    post(action, body, params, version, baseUrl) {
        return this.request(action, 'POST', body, params, version, baseUrl);
    }

    put(action, body, params, version, baseUrl) {
        return this.request(action, 'PUT', body, params, version, baseUrl);
    }

    patch(action, body, params, version, baseUrl) {
        return this.request(action, 'PATCH', body, params, version, baseUrl);
    }

    delete(action, params, version, baseUrl) {
        return this.request(action, 'DELETE', undefined, params, version, baseUrl);
    }

    getBody(obj) {
        return Object.entries(obj)
            .filter(([, value]) => value !== undefined)
            .reduce((data, [key, value]) => {
                if (Array.isArray(value)) {
                    value.forEach((val, index) => {
                        data.append([`${key}[${index}]`], val);
                    })
                } else {
                    data.append([key], value);
                }
                return data;
            }, new URLSearchParams());
    }

}

module.exports = {Base};