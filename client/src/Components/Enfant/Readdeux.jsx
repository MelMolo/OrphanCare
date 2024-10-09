import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import '../Allocation/Homehuit.css'
import BackspaceIcon from '@mui/icons-material/Backspace'


function Read() {
  const { id } = useParams();
  const [parcours, setParcours] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3002/infoparcours/" + id)
      .then(res => setParcours(res.data))
      .catch(err => console.log(err));
  }, [])
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3002/infoante/" + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="mainContent flex">
      <div className="background-container flex">
        <Sidebar />
        <div className="content">
          <div className='card mt-4'>
            <div className='card-header'>
              <h1 className='card-title'>Kid Details</h1>
            </div>
            <div className='card-body'>
              <div>
                <table border={1} className="table">
                  <thead>
                    <tr>
                      <th>Year of the Academic History</th>
                      <th>Class level of the Academic History</th>
                      <th>School</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parcours.map((parcours, index) => {
                      return <tr key={index}>
                        <td>{parcours.ANNEE}</td>
                        <td>{parcours.NIVEAU}</td>
                        <td>{parcours.ETABLISSEMENT}</td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div><br /><br />
              <div>
                <table border={1} className="table">
                  <thead>
                    <tr>
                      <th>Medical History Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((antecedent, index) => {
                      return <tr key={index}>
                        <td>{antecedent.DESCANT}</td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div><br /><br />
              <div>
                <Link to="/homedeux" className="btn btn5"><BackspaceIcon /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Read
