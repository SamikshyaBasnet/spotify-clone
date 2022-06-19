//endpoints

export const authEndpoint =
    "https://accounts.spotify.com/authorize";



//click login bth
//redirect to spotify login page
//redirect to home page after

// const clientId = "0026701ce42346a196df2c2d61941171";
const clientId = 'ff522527748d4305a01b419aa588e43d';

const redirectUri = "http://localhost:3000/";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromResponseUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;