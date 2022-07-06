import React, { Fragment } from 'react';
import '../App.css';

const Footer = () => {
  
    return (
        
        <Fragment>

            <footer className='flex justify-between bg-gray-600 p-4 mt-auto bottom-0 fixed w-full'>
                
                <p className='text-lg font-semibold'> Avisos legales </p>
                <p className='text-lg font-semibold'> Copyright &#169; 2022 Entertainment.Inc </p>
                <p className='text-lg font-semibold'> Politica de privacidad </p>
    
            </footer>
  
        </Fragment>  
    )
}

export default Footer;