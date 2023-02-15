import React from 'react';


export const Header = (props) => {
 
  return (

  <div className="ui top  inverted attached menu" style={{alignContent:'right'}}> 
  {/* <span className='item link gray' onClick={props.onToggleMenu}><i className="sidebar icon">Menu</i></span> */}
  <span className='item link gray ' >profile</span> 
  <span className='item link gray ' >About</span> 

  <span className="item link gray ">Log out</span>
  </div>
);
  }

export default Header