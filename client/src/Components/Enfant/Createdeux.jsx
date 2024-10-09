import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import '../Allocation/Homehuit.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

function Create() {
    const [values, setValues] = useState({
        NOMPRENENF: '',
        DATENAISSENF: '',
        DATEENTREE: '',
        FamEnf: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/createdeux', values)
            .then(res => {
                console.log(res);
                navigate('/homedeux')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="mainContent flex">
            <div className="background-container flex">
                <Sidebar />
                <div className="content">
                    <div className='card'>
                        <div className='card-header'>
                            <h1 className='card-title'>Add a Kid</h1>
                        </div>
                        <div className='card-body'>
                            <div className='col-md-8'>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="">Full Name</label>
                                        <input type="text" placeholder='Enter full name' className='form-control'
                                            onChange={e => setValues({ ...values, NOMPRENENF: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Family name</label>
                                        <input type="text" placeholder='Enter family name' className='form-control'
                                            onChange={e => setValues({ ...values, FamEnf: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Birth Date</label>
                                        <input type="date" className='form-control'
                                            onChange={e => setValues({ ...values, DATENAISSENF: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Admission date</label>
                                        <input type="date" className='form-control'
                                            onChange={e => setValues({ ...values, DATEENTREE: e.target.value })} />
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
