import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import '../Allocation/Homehuit.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'


function Create() {
    const [values, setValues] = useState({
        IDDON: '',
        DONATEUR: '',
        DATEDON: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/createsix', values)
            .then(res => {
                console.log(res);
                navigate('/homesix')
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
                            <h1 className='card-title'>Add a Gift</h1>
                        </div>
                        <div className='card-body d-flex vh-50 justify-content-center align-items-center'>
                            <div className='col-md-8'>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="">ID</label>
                                        <input type="number" className='form-control'
                                            onChange={e => setValues({ ...values, IDDON: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Donor name</label>
                                        <input type="text" placeholder='Enter donor name' className='form-control'
                                            onChange={e => setValues({ ...values, DONATEUR: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Gift Date</label>
                                        <input type="date" className='form-control'
                                            onChange={e => setValues({ ...values, DATEDON: e.target.value })} />
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
