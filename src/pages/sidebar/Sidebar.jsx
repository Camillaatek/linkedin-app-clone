import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <Avatar className="sidebar__avatar"/>
            <h2>Camilla Åmli</h2>
            <h4>Camillaatek@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">70,642</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">60,234</p> 
            </div>
        </div>

        <div className="sidebar__bottom">
            <h4>Recent</h4>
            <p># programming</p>
            <p># softwareengeneering</p>
            <p># design</p>
            <p># 3Dartist</p>
            <p># developer</p>
        </div>
    </div>
  )
}

export default Sidebar