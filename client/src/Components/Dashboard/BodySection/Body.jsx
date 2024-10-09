import React from 'react'
import './Body.css'
import { Link } from 'react-router-dom'
import Top from './TopSection/Top'


function Body() {
    return (
        <div className='body'>
            <Top /><br /><br />
            <div>
            </div>
            <div>
                <table className='table'>
                    <td>
                        <button className='btn6'><Link to={`/homedeux`}>Kids Profiles</Link></button>
                    </td>
                    <td>
                        <button className='btn6'><Link to={`/homequatre`}>Academics History</Link></button>
                    </td>
                    <td>
                        <button className='btn6'><Link to={`/homecinq`}>Medical History</Link></button>
                    </td>
                    <td>
                        <button className='btn6'><Link to={`/homesix`}>Gifts</Link></button>
                    </td>
                    <td>
                        <button className='btn6'><Link to={`/home`}>Resources List</Link></button>
                    </td>
                    <td>
                        <button className='btn6'><Link to={`/homehuit`}>Allocations List</Link></button>
                    </td>
                    <td>
                        <button className='btn6'><Link to={`/homesept`}>Inventory</Link></button>
                    </td>
                    <td>
                        <button className='btn6'><Link to={`/hometrois`}>Employees Profiles</Link></button>
                    </td>
                </table>
            </div>
        </div>
    )
}

export default Body
