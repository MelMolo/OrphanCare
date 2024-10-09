import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import './Homehuit.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'


function Create() {
    const [values, setValues] = useState({
        IDALLO: '',
        IDENF: '',
        OBJET: '',
        DATEALLO: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/createhuit', values)
            .then(res => {
                console.log(res);
                navigate('/homehuit')
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
                            <h1 className='card-title'>Add an Allocation</h1>
                        </div>
                        <div className='card-body d-flex vh-50 justify-content-center align-items-center'>
                            <div className='col-md-8'>
                                <form onSubmit={handleSubmit}>
                                <div>
                                        <label htmlFor="">Allocation ID</label>
                                        <input type="number" className='form-control'
                                            onChange={e => setValues({ ...values, IDALLO: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Matching Kid ID</label>
                                        <input type="number" className='form-control'
                                            onChange={e => setValues({ ...values, IDENF: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Object</label>
                                        <input type="text" className='form-control'
                                            onChange={e => setValues({ ...values, OBJET: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Date</label>
                                        <input type="date" className='form-control'
                                            onChange={e => setValues({ ...values, DATEALLO: e.target.value })} />
                                    </div>
                                  <br />
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
