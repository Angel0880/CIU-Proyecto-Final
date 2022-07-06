import React, { Fragment } from 'react';
import '../App.css';

const Footer = () => {
  
    return (
        
        <Fragment>

            <footer>
                <div className='flex justify-between bg-gray-600 p-4 mt-auto text-1xl bottom-0 fixed w-full'>
    
                    <p> Avisos legales </p>
                    <p> Copyright &#169; 2022 Entertainment.Inc </p>
                    <p> Politica de privacidad </p>
    
                </div>
            </footer>
  
        </Fragment>  
    )
}

export default Footer;