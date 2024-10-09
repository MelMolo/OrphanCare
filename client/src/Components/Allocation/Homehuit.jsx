import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import './Homehuit.css'
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsIcon from '@mui/icons-material/Settings';



function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3002/allocation")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])
    const handleDelete = (id) => {
        axios.delete("http://localhost:3002/deletehuit/" + id)
            .then(res => {
                location.reload(res);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mainContent flex">
            <div className="background-container flex">
                <Sidebar />
                <div className="content">
                    <div className="card mt-4">
                        <div className="card-header">
                            <h1 className="card-title">Allocations List</h1>
                            <div className="d-flex justify-content-end">
                                <Link to="/createhuit" data-toggle="modal" data-target="#addModal"><button className="btn btn4"><AddBoxIcon /></button></Link>
                            </div> <br /><br />
                            <div className="card-body">
                                <div className="col-md-12">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Allocation ID</th>
                                                <th>Matching Kid ID</th>
                                                <th>Object</th>
                                                <th>Date</th>
                                                <th><SettingsIcon /></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((allocation, index) => {
                                                return <tr key={index}>
                                                    <td>{allocation.IDALLO}</td>
                                                    <td>{allocation.IDENF}</td>
                                                    <td>{allocation.OBJET}</td>
                                                    <td>{allocation.DATEALLO}</td>
                                                    <td>
                                                    <button onClick={() => handleDelete(allocation.IDALLO)} className="btn btn3"><DeleteIcon /></button>
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
