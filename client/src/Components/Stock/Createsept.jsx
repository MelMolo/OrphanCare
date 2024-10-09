import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import '../Allocation/Homehuit.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'


function Create() {
    const [values, setValues] = useState({
        IDMAG: '',
        LIBMAG: '',
        TYPMAG: '',
        QTEMAG: '',
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/createsept', values)
            .then(res => {
                console.log(res);
                navigate('/homesept')
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
                            <h1 className='card-title'>Add Parcours</h1>
                        </div>
                        <div className='card-body d-flex vh-50 justify-content-center align-items-center'>
                            <div className='col-md-8'>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="">ID</label>
                                        <input type="number" className='form-control'
                                            onChange={e => setValues({ ...values, IDMAG: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Title</label>
                                        <input type="text" placeholder='Enter the title' className='form-control'
                                            onChange={e => setValues({ ...values, LIBMAG: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Type</label>
                                        <input type="text" placeholder='Enter type' className='form-control'
                                            onChange={e => setValues({ ...values, TYPMAG: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Capacity</label>
                                        <input type="number" className='form-control'
                                            onChange={e => setValues({ ...values, TYPMAG: e.target.value })} />
                                    </div>
                                    <br />
                                    <button className='btn btn1'>
                                        <CheckCircleIcon></CheckCircleIcon>
                                    </button>
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
