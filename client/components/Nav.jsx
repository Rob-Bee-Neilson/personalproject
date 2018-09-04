import React from 'react'
//import ranks from '../../data/ranks'
//import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="navbar">
            <h2>Nav</h2>
            <p>Text</p>
            {/* <ul>
                {Object.keys(ranks).map(rankData => {
                    return <li key={rankData}><Link to={`/list/${rankData}`}>{rankData}</Link></li>
                })}
            </ul>     */}
        </div>
)}
export default Nav

//The above list is from the taxonomic routing exercise. May need a similar list.