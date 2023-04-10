import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Slider from '@mui/material/Slider';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__left">
        <img src="" alt="" className='footer__albumLogo' />
        <div className="footer__songInfo">
          <h4>No song is playing</h4>
          <p>Singer</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon className='footer__icon' fontSize='large' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              // getAriaValueText={}
              color="secondary"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
