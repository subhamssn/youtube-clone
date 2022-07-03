import React, { useState } from 'react'
import './header.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
  
const Header = () => {

  const dispatch = useDispatch();
  const themeState = useSelector(state => state.lightTheme)
  const theme = themeState?"Dark Theme":"Light Theme"
  const toggler = () => {
    dispatch({ type: 'TOGGLE' })
    console.log(themeState);
  }
  const history = useHistory();
  const takeHome = () => {
    history.push('/')
  }

  const [query, setQuery] = useState("");
  
  const searchExec = () => {
    history.push({
      pathname: '/view/results',
      state: query
    }
    )
  }

  return (
    <div className='header' style={{height: '11vh'}}>
        <img
            src="https://brandlogos.net/wp-content/uploads/2017/08/download-youtube-new-logo.jpg"
            alt="Youtube"
            onClick={takeHome}
            className='logo'
            style={{cursor: 'pointer'}}
        
        />              
      <input
        type="text"
        className="seach-bar"
        onChange={(event) =>{setQuery(event.target.value)}}
        placeholder='Search your video here' style={{ "margin-left": "20%", width: "40%", backgroundColor: 'transparent' }} />
        
              
      
      
      
      
          
    </div>
  )
}

export default Header