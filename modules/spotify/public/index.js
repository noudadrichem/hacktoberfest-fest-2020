"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("dotenv/config");
const spotify_web_api_node_1 = tslib_1.__importDefault(require("spotify-web-api-node"));
// credentials are optional
const spotifyApi = new spotify_web_api_node_1.default({
    clientId: '55cb9f2ea2f64c0fa98e9f5f343688a7',
    clientSecret: 'f835adeef4f543ca9752f98b97dbeeae',
    redirectUri: 'http://www.example.com/callback'
});
spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESSTOKEN || '');
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', { limit: 10, offset: 20 }, function (err, data) {
    if (err) {
        console.error('Something went wrong!');
    }
    else {
        console.log(data.body);
    }
});
//# sourceMappingURL=index.js.map