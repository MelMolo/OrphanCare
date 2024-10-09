import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import '../Allocation/Homehuit.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsIcon from '@mui/icons-material/Settings';
        



function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3002/enfant")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete("http://localhost:3002/deletedeux/" + id)
            .then(res => {
                location.reload(res);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mainContent flex">            
            <div className="background-container flex">
            <Sidebar/>
                <div className="content">
                    <div className="card flex justify-content-center">
                        <div className="card-header">
                            <h1 className="card-title">Kids List</h1>
                            <div className="link flex">
                            <Link to="/createdeux" className="btn btn4" data-toggle="modal" data-target="#addModal"><AddBoxIcon /></Link>
                            </div>
                            <div className="card-body">
                                <div className="col-md-12">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Full Name</th>
                                                <th>Birth Date</th>
                                                <th>Admission Date</th>
                                                <th>Family Name</th>
                                                <th><SettingsIcon /></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((enfant, index) => {
                                                return <tr key={index}>
                                                    <td>{enfant.IDENF}</td>
                                                    <td>{enfant.NOMPRENENF}</td>
                                                    <td>{enfant.DATENAISSENF}</td>
                                                    <td>{enfant.DATEENTREE}</td>
                                                    <td>{enfant.FamEnf}</td>
                                                    <td className="align">
                                                        <Link to={`/readdeux/${enfant.IDENF}`} className="btn btn1"><VisibilityIcon /></Link>
                                                        <Link to={`/editdeux/${enfant.IDENF}`} className="btn btn2"><EditIcon /></Link>
                                                        <button onClick={() => handleDelete(enfant.IDENF)} className="btn btn3"><DeleteIcon /></button>
                                                    </td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
