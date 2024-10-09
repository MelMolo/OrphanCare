import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import '../Allocation/Homehuit.css'
import BackspaceIcon from '@mui/icons-material/Backspace'
import EditIcon from '@mui/icons-material/Edit'



function Read() {
  const { id } = useParams();
  const [enfants, setEnfants] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3002/read/' + id)
      .then(res => {
        console.log(res)
        setEnfants(res.data[0]);
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="mainContent flex">
      <div className="background-container flex">
        <Sidebar />
        <div className="content">
          <div className='card mt-4'>
            <div className='card-header'>
              <h1 className='card-title'>Resource Details</h1>
            </div>
            <div className='card-body d-flex vh-50 justify-content-center align-items-center'>
              <div className='col-md-8'>
                <h2>{enfants.id}</h2>
                <h2>{enfants.LIBRESS}</h2>
                <h2>{enfants.TYPRESS}</h2>
                <h2>{enfants.QTITERESS}</h2>
                <Link to="/home" className='btn btn2'><BackspaceIcon /></Link>
                <Link to={`/edit/${enfants.id}`} className='btn btn1'><EditIcon></EditIcon></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Read
