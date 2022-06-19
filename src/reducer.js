// export const initialState = {
//     user: null,
//     playlists: [],
//     playing: false,
//     item: null,
//     discover_weekly: null,
//     top_artists: null,
//     spotify: null,
//     //remove afer finished developing
//     // token: "BQCGOntmJ5EJ_DjfoHLw3smVFou-7CtWpS3b1VRq66APJhnA6Vc01aPQxE98ysWYFsSdGvxlUOBCeMpyh6sUXmDgLM1zbtZf8zY5XQSzjJHoL0Tao7QfbIi4UPlzI-mlpZMt8ZCUZoXp6pYn8EMhsY_APpBXVuwMxIDOhFeRdn28Bew03d5orlwDqGlZ5JcmY_oh0IJXFCWVELsi_I1kDw",

//     //  token: "BQBbVo4QuRfxBRkWOU73CAAXMuhhdTnvtLku2zoV2FO32QrvtvDmv1v0h5lN9I9MzrD9Fjqd9Hj6d7wPhU7ddUmuSP1AEeUvaHkHDUpMj_Bo8KhPqgTEfnFdLjT5gc-mzL0gHOG8wNL16665pCXERdyuwkYxW1SksBy-uTrdJOzt5dh7mlgINiTAV8qp1dFgbfoW3R6HbOaZ3dcfddp8Gw"
// };


// const reducer = (state, action) => {
//     console.log(state, action);

//     //Action --> type, payload
//     switch (action.type) {
//         case 'SET_USER':
//             return {
//                 ...state,
//                 user: action.user

//             };
//         case 'SET_TOKEN':
//             return {
//                 ...state,
//                 token: action.token

//             };
//         case 'SET_PLAYLISTS':
//             return {
//                 ...state,
//                 playlists: action.playlists

//             };
//         case "SET_TOP_ARTISTS":
//             return {
//                 ...state,
//                 top_artists: action.top_artists,
//             };

//         case 'SET_DISCOVER_WEEKLY':
//             return {
//                 ...state,
//                 discover_weekly: action.discover_weekly,
//             };
//         case "SET_ITEM":
//             return {
//                 ...state,
//                 item: action.item,
//             };

//         case "SET_PLAYING":
//             return {
//                 ...state,
//                 playing: action.playing,
//             };
//         default:
//             return state;
//     }
// }

// export default reducer;

import {
    findAllByDisplayValue
} from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
};

export default reducer;