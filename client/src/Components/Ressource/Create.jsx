import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import '../Allocation/Homehuit.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

function Create() {
    const [values, setValues] = useState({
        LIBRESS: '',
        TYPRESS: '',
        QTITERESS: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/create', values)
            .then(res => {
                console.log(res);
                navigate('/home')
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
                            <h1 className='card-title'>Add Ressource</h1>
                        </div>
                        <div className='card-body d-flex vh-50 justify-content-center align-items-center'>
                            <div className='col-md-8'>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="">Title</label>
                                        <input type="text" placeholder='Enter title' className='form-control'
                                            onChange={e => setValues({ ...values, LIBRESS: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Type</label>
                                        <input type="text" placeholder='Enter type' className='form-control'
                                            onChange={e => setValues({ ...values, TYPRESS: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Quantity</label>
                                        <input type="number" className='form-control'
                                            onChange={e => setValues({ ...values, QTITERESS: e.target.value })} />
                                    </div> <br />
                                    <button className='btn btn1'><CheckCircleIcon /></button>
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
