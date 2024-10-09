import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import '../Allocation/Homehuit.css'

function Create() {
    const [values, setValues] = useState({
        NOMPRENPERS: '',
        FNCPERS: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/createtrois', values)
            .then(res => {
                console.log(res);
                navigate('/hometrois')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="mainContent flex">
            <div className="background-container flex">
                <Sidebar />

                <div className="content">
                    <div className='card mt-4'>
                        <div className='card-header'>
                            <h1 className='card-title'>Add Employee</h1>
                        </div>
                        <div className='card-body d-flex vh-50 justify-content-center align-items-center'>
                            <div className='col-md-8'>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="">Full Name</label>
                                        <input type="text" placeholder='Enter full name' className='form-control'
                                            onChange={e => setValues({ ...values, NOMPRENPERS: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Fonction</label>
                                        <input type="text" placeholder='Enter fonction' className='form-control'
                                            onChange={e => setValues({ ...values, FNCPERS: e.target.value })} />
                                    </div>
                                  <br />
                                    <button className='btn btn2'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create
