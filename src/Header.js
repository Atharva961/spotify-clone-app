import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{user}, dispatch] = useDataLayerValue();

    return (
        <div className='header'>
            <div className="header__left">
                <SearchIcon />
                <input type="text" placeholder="Search for Artists, Songs, Podcasts" />
            </div>
            <div className="header__right">
                <Avatar alt="" src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header

