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
        axios.get("http://localhost:3002/ressource")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete("http://localhost:3002/delete/" + id)
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
                            <h1 className="card-title">Resources List</h1>
                            <div className="d-flex justify-content-end">
                                <Link to="/create" className="btn btn4" data-toggle="modal" data-target="#addModal"><AddBoxIcon /></Link>
                            </div>
                            <div className="card-body">
                                <div className="col-md-12">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Type</th>
                                                <th>Quantity</th>
                                                <th><SettingsIcon /></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((ressource, index) => {
                                                return <tr key={index}>
                                                    <td>{ressource.id}</td>
                                                    <td>{ressource.LIBRESS}</td>
                                                    <td>{ressource.TYPRESS}</td>
                                                    <td>{ressource.QTITERESS}</td>
                                                    <td className="align">
                                                        <Link to={`/read/${ressource.id}`} className="btn btn1"><VisibilityIcon /></Link>
                                                        <Link to={`/edit/${ressource.id}`} className="btn btn2"><EditIcon /></Link>
                                                        <button onClick={() => handleDelete(ressource.id)} className="btn btn3">
                                                        <DeleteIcon />
                                                        </button>
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
