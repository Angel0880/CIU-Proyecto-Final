import React, { Fragment } from 'react';
import lamp from '../img/lampOn.png';
import '../App.css';

const Header = ( { changeTheme } ) => {

  return (
  
    <Fragment>

      <div className='flex justify-end'>

        <button 
          className='px-5 py-2 mt-3 mr-5 bg-blue-500 rounded-lg' 
          onClick = {changeTheme} 
        > 
        
          <img src={lamp}/>

        </button>

      </div>

      <div className='mb-3 flex justify-center'>
        
        <h1>Entertainment</h1>

      </div>

    </Fragment>

  )
}

export default Header;