import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import '../Allocation/Homehuit.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

function Create() {
    const [values, setValues] = useState({
        IDENF: '',
        ANNEE: '',
        NIVEAU: '',
        ETABLISSEMENT:''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/createquatre', values)
            .then(res => {
                console.log(res);
                navigate('/homequatre')
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
                            <h1 className='card-title'>Add a School History</h1>
                        </div>
                        <div className='card-body d-flex vh-50 justify-content-center align-items-center'>
                            <div className='col-md-8'>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="">Matching Kid ID</label>
                                        <input type="number" className='form-control'
                                            onChange={e => setValues({ ...values, IDENF: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">School Year</label>
                                        <input type="number" className='form-control'
                                            onChange={e => setValues({ ...values, ANNEE: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Class Level</label>
                                        <input type="text" placeholder='Enter the class level' className='form-control'
                                            onChange={e => setValues({ ...values, NIVEAU: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">School Name</label>
                                        <input type="text" placeholder='Enter the school name' className='form-control'
                                            onChange={e => setValues({ ...values, ETABLISSEMENT: e.target.value })} />
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
