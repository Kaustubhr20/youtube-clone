import React from 'react'
import './ChannelRow.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
  return (
    <div className='channelRow'>
        <AccountCircleIcon className='channelRow__logo' alt={channel} src={image} />
        <div className='channelRow__text'>
            <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon />}</h4>
            <p>{subs} subscribers • {noOfVideos} videos</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow