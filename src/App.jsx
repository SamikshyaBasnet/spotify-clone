import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { getTokenFromResponseUrl } from "./spotify";
import "./App.css";
import Login from "./Login";
import { useDataLayerValue } from "./DataLayer";

const s = new SpotifyWebApi();

function App() {
  const [{ token, discover_weekly }, dispatch] = useDataLayerValue();
  //const id = discover_weekly.id
  // console.log("discover weekly=", discover_weekly);
  // console.log("id", id)
  useEffect(() => {
    // Set token
    const hash = getTokenFromResponseUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getPlaylist("5lJgm8ivSimDsJPkkS24gu").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App;
