import React from 'react'
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow';


const Body = ({ spotify }) => {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    console.log("sdfasjkdfsadlhfasd", discover_weekly)

    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify:playlist:5lJgm8ivSimDsJPkkS24gu`,
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    const playSong = (id) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });

    };

    return (
        <div className='body'>
            <Header spotify={spotify} />

            <div className="body__info">
                {/* <h1>{discover_weekly?.name}</h1> */}
                <img
                    // src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/wKKUklXZuWKwGroJ9H_DH3lBIadDfXIdUWO0bEnE3G3yUzzBD3KUzm06qINRSi4wQAHyiDUBwTdjn_UZI9i9DHs8KO9hqJcNYRXxA6GLJ5E=/OTI6MDM6MjFUODItMTAtMg==" 
                    src={discover_weekly?.images[0].url}
                // alt="weekly" 
                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description !== "" ?
                        <p>{discover_weekly?.description}</p> : <p>Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.</p>
                    }</p>
                </div>

            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon
                        onClick={playPlaylist}
                        className="body__shuffle" />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>
                {/* List of songs */}
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow playSong={playSong(item.track.id)} track={item.track} />
                ))}

            </div>
        </div>
    )
}

export default Body