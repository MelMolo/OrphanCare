import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import SchoolIcon from '@mui/icons-material/School'
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import ShopIcon from '@mui/icons-material/Shop'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import InventoryIcon from '@mui/icons-material/Inventory'
import BadgeIcon from '@mui/icons-material/Badge'
import LogoutIcon from '@mui/icons-material/Logout'
import HomeIcon from '@mui/icons-material/Home'


const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <HomeIcon />
        <h2><a href="http://localhost:5173/dashboard">Orphan Care</a></h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
         Kids Management
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <Link to={`/homedeux`} className="menuLink flex">
              <span className="smallText">
                 <ChildCareIcon />Kids
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to={`/homequatre`} className="menuLink flex">
              <span className="smallText">
                <SchoolIcon/>Academic History
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to={`/homecinq`} className="menuLink flex">
              <span className="smallText">
              <MedicationLiquidIcon />Medical History
              </span>
            </Link>
          </li>
        </ul>
      </div>


      <div className="settingsDiv">
        <h3 className="divTitle">
          Resources Management
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <Link to={`/homesix`} className="menuLink flex">
              <span className="smallText">
              <CardGiftcardIcon />Gifts
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to={`/home`} className="menuLink flex">
              <span className="smallText">
              <ShopIcon />Resources
              </span>
            </Link>
          </li>

          <li className="listItem">
            <Link to={`/homehuit`} className="menuLink flex">
              <span className="smallText">
              <HowToRegIcon />Resource Allocation
              </span>
            </Link>
          </li>

           <li className="listItem">
            <Link to={`/homesept`} className="menuLink flex">
              <span className="smallText">
               <InventoryIcon />Inventory
              </span>
            </Link>
          </li>

          <div className="menuDiv">
            <h3 className="divTitle">
              Employees Management
            </h3>
            <ul className="menuLists grid">

              <li className="listItem">
                <Link to={`/hometrois`} className="menuLink flex">
                  <span className="smallText">
                    <BadgeIcon />Employees
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="menuDiv">
            <h3 className="divTitle">
              Settings
            </h3>
            <ul className="menuLists grid">
              <li className="listItem">
                <a href="/" className="menuLink flex">
                  <span className="smallText">
                   <LogoutIcon />Log Out
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar