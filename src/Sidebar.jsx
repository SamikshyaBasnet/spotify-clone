import React from 'react'
import './Sidebar.css';
import Logo from './images/logo.jpg'
import SidebarOptions from './SidebarOptions';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicTwoTone from '@material-ui/icons/LibraryMusic';
import HomeSharp from '@material-ui/icons/Home';
import { useDataLayerValue } from './DataLayer';

const Sidebar = () => {

    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log("pla", playlists);

    return (
        <div className='sidebar'>
            <img src={Logo} alt="" className="sidebar_logo" />
            <SidebarOptions Icon={HomeSharp} title="Home" />
            <SidebarOptions Icon={SearchIcon} title="Search" />
            <SidebarOptions Icon={LibraryMusicTwoTone} title="Your Library" />

            <br />
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => {
                <SidebarOptions title={playlist.name} />
            })}



        </div>
    )
}

export default Sidebar