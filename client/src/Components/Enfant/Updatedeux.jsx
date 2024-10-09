import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import '../Allocation/Homehuit.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'


function Update() {

    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3002/readdeux/' + id)
            .then(res => {
                console.log(res)
                setValues({ ...values, NOMPRENENF: res.data[0].NOMPRENENF, DATENAISSENF: res.data[0].DATENAISSENF, DATEENTREE: res.data[0].DATEENTREE, FamEnf: res.data[0].FamEnf, })
            })
            .catch(err => console.log(err))
    }, [])

    const [values, setValues] = useState({
        NOMPRENENF: '',
        DATENAISSENF: '',
        DATEENTREE: '',
        FamEnf:''
    })

    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3002/updatedeux/' + id, values)
            .then(res => {
                console.log(res);
                navigate('/homedeux')
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
                            <h1 className='card-title'>Edit Enfant</h1>
                        </div>
                        <div className='card-body d-flex vh-50 justify-content-center align-items-center'>
                            <div className='col-md-8'>
                                <form onSubmit={handleUpdate}>
                                    <div>
                                        <label htmlFor="">Full Name</label>
                                        <input type="text" placeholder='Enter full name' className='form-control'
                                            value={values.NOMPRENENF}
                                            onChange={e => setValues({ ...values, NOMPRENENF: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Family Name</label>
                                        <input type="text" placeholder='Enter family name' className='form-control'
                                            value={values.FamEnf}
                                            onChange={e => setValues({ ...values, FamEnf: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Birth Date</label>
                                        <input type="date" className='form-control'
                                            value={values.DATENAISSENF}
                                            onChange={e => setValues({ ...values, DATENAISSENF: e.target.value })} />
                                    </div><br />
                                    <div>
                                        <label htmlFor="">Admission Date</label>
                                        <input type="date" className='form-control'
                                            value={values.DATEENTREE}
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

export default Update
