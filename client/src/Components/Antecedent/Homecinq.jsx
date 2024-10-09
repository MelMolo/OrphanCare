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
        axios.get("http://localhost:3002/antecedentmedical")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete("http://localhost:3002/deletecinq/" + id)
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
                            <h1 className="card-title">Medical History List</h1>
                            <div className="d-flex justify-content-end">
                                <Link to="/createcinq" data-toggle="modal" data-target="#addModal"><button className="btn btn4"><AddBoxIcon /></button></Link>
                            </div>
                            <div className="card-body">
                                <div className="col-md-12">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Description</th>
                                                <th><SettingsIcon /></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((antecedentmedical, index) => {
                                                return <tr key={index}>
                                                    <td>{antecedentmedical.IDANT}</td>
                                                    <td>{antecedentmedical.DESCANT}</td>
                                                    <td>
                                                        <button onClick={() => handleDelete(antecedentmedical.IDANT)} className="btn btn3"><DeleteIcon /></button>
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
