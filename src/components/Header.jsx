import React, { Fragment } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

const Header = ( { changeTheme } ) => {

  return (
  
    <Fragment>

      <div className='flex justify-center'>
        
        <h1>Entertainment</h1>

      </div>

      <div className='flex justify-end'>

        <Button 
            variant="secondary" 
            className='px-3' 
            onClick = {changeTheme}
          > 
            Cambiar color de fondo

        </Button>

      </div>

    </Fragment>

  )
}

export default Header;