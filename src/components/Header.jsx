import React, { Fragment } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

const Header = ( { changeTheme } ) => {

  return (
  
    <Fragment>

      <div className='flex justify-center items-center'>

        <h1>Entertainment</h1>

      </div>

      <Button variant="primary" css={{ position: "fixed", bottom: "30px", right: "50px" }} onClick = {changeTheme}/>

    </Fragment>

  )
}

export default Header;