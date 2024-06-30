# steamworks-web-api

JS Library for use Steamworks Web API

Most of the functions have not been tested, if you find any bugs open an issue explaining the bug and proposing a
solution or make a pull request.

# Steamworks Web Api

[![NPM](https://img.shields.io/npm/l/@awesomepermissions/sdk)](https://github.com/steamworks-web-api/blob/main/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/steamworks-web-api)](https://github.com/steamworks-web-api/graphs/contributors)
[![npm](https://img.shields.io/npm/v/steamworks-web-api)](https://www.npmjs.com/package/steamworks-web-api)
[![npm](https://img.shields.io/npm/dm/steamworks-web-api)](https://www.npmjs.com/package/steamworks-web-api)

## Installation

```shell
npm install steamworks-web-api
```

## Usage

```javascript
const {SteamworksWebApi} = require('steamworks-web-api');
const steamworksWebApi = new SteamworksWebApi('<key> Steamworks Web API publisher authentication key.');

await steamworksWebApi.IPlayerService.GetBadges('76561198069627324');
```

## Contributors

<a href="https://github.com/steamworks-web-api/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=steamworks-web-api" />
</a>

## License

MIT