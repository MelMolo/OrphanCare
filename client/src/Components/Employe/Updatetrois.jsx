import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import '../Allocation/Homehuit.css'

function Update() {

    const { id } = useParams();
  

    const [values, setValues] = useState({
        NOMPRENPERS: '',
        FNCPERS: ''
    })

    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3002/updatetrois/' + id, values)
            .then(res => {
                console.log(res);
                navigate('/hometrois')
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="mainContent flex">
            <div className="background-container flex">
                <Sidebar />

                <div className="content">
                    <div className='card mt-4'>
                        <div className='card-header'>
                            <h1 className='card-title'>Update Employee</h1>
                        </div>
                        <div className='card-body d-flex vh-50 justify-content-center align-items-center'>
                            <div className='col-md-8'>
                                <form onSubmit={handleUpdate}>
                                    <div>
                                        <label htmlFor="">Full Name</label>
                                        <input type="text" placeholder='Enter full name' className='form-control'
                                            value={values.NOMPRENPERS}
                                            onChange={e => setValues({ ...values, NOMPRENPERS: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Fonction</label>
                                        <input type="text" placeholder='Enter fonction' className='form-control'
                                            value={values.FNCPERS}
                                            onChange={e => setValues({ ...values, FNCPERS: e.target.value })} />
                                    </div>
                                  <br />
                                    <button className='btn btn-primary'>Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update
