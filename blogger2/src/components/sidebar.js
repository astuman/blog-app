import React, { useState } from 'react'
import '../App.css'

import { FaBars, FaThList, FaUserAlt, FaTh, FaStickyNote } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) =>{
    const [isOpen, setIsOpen] = useState(false)
     const toggle = ()=>{setIsOpen(!isOpen)};
    const MenuItem = [
        {
            path:'/',
            name:"Main",
            icon: <FaTh />
        },
        {
            path:'/posts',
            name:"Posts",
            icon:<FaThList />
        },
        {
            path:'/albums',
            name:"Albums",
            icon:<FaThList />
        },
        {
            path:'/comments',
            name:"Comments",
            icon:<FaThList />
        },
        {
            path:'/photos',
            name:"Photos",
            icon:<FaThList />
        },
        {
            path:'/totos',
            name:"Todos",
            icon:<FaThList />
        },
        {
            path:'/users',
            name:"Users",
            icon:<FaThList />
        },
        {
            path:'/about',
            name:"about",
            icon:<FaUserAlt />
        }

    ]
    return (
        <div className='container'>
            <div style={{width: isOpen ? "250px" : "50px"}} className='sidebar'>
                <div  className='top-section'>
                    <div style={{marginLeft: isOpen ? "20px" : "10px"}} className='bars'>
                        <FaBars  onClickCapture={toggle} />
                    </div>
                </div>
                {
                    MenuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className='link'>
                            <div className='icon'>{item.icon}</div>
                            <div className='link_text'>{item.name}</div>
                        </NavLink>
                        ))
                }
            </div>
            <main>{children}</main>
            
        </div>
    );
}
export default Sidebar;