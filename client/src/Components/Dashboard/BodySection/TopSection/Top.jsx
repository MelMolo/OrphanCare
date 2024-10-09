import React from 'react'
import './top.css'
import { BiSearchAlt } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import img from '../../../../Assets/image3.jpg'
import video from '../../../../Assets/video.mp4'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import logo from '../../../../Assets/logo.png'


const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
        <img src={logo} alt="Logo" />

          <h1>Welcome to Orphan Care</h1>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <AdminPanelSettingsIcon className='icon'/>
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>

      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1></h1>
          <p></p>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top