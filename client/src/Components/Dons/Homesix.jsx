import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import '../Allocation/Homehuit.css'
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsIcon from '@mui/icons-material/Settings';



function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3002/don")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])
    const handleDelete = (id) => {
        axios.delete("http://localhost:3002/deletesix/" + id)
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
                            <h1 className="card-title">Gifts List</h1>
                            <div className="d-flex justify-content-end">
                                <Link to="/createsix" className="btn btn4" data-toggle="modal" data-target="#addModal"><AddBoxIcon /></Link>
                            </div>
                            <div className="card-body">
                                <div className="col-md-12">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Donor</th>
                                                <th>Gift Date</th>
                                                <th><SettingsIcon /></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((don, index) => {
                                                return <tr key={index}>
                                                    <td>{don.IDDON}</td>
                                                    <td>{don.DONATEUR}</td>
                                                    <td>{don.DATEDON}</td>
                                                    <td>
                                                    <button onClick={() => handleDelete(don.IDDON)} className="btn btn3"><DeleteIcon /></button>
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
