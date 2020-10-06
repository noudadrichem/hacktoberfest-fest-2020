import 'dotenv/config';
import SpotifyWebApi from 'spotify-web-api-node';

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: '55cb9f2ea2f64c0fa98e9f5f343688a7',
  clientSecret: 'f835adeef4f543ca9752f98b97dbeeae',
  redirectUri: 'http://www.example.com/callback'
});

// spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESSTOKEN || '')

// spotifyApi.getArtistAlbums(
//   '43ZHCT0cAZBISjO8DG9PnE',
//   { limit: 10, offset: 20 },
//   (err: any, data: any) => {
//     if (err) {
//       console.error('Something went wrong!');
//     } else {
//       console.log(data.body);
//     }
//   }
// );

export function login() {
    // TODO hier dus een login met spotify account.
    return {
        moetje: 'hoi',
        foo: 'bar'
    }
}

// TODO get signed in user playlists...

