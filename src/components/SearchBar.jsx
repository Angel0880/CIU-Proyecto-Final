import React, { Fragment, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import CardMovie from './CardMovie';
import '../App.css';

const SearchBar = () => {
    const[pelis, setPelis] = useState([]);
    const[busqueda, setBusqueda]  = useState("");

    const handleSubmit  = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9b0f82aa&s=${busqueda}`);
        const data = await response.json()
        setPelis(data.Search)

    }

    useEffect(() => {

        handleSubmit()

    },[])

    return (
  
        <Fragment>

            <div className='flex justify-center items-center '>

                <Form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Busca tu peli, serie..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                
                    />
                </Form>

            </div>

            <div>
                {
                    
                    pelis?.map(peli => (
                        <CardMovie 
                            peli = { peli }
                            key = { peli.imdbID }
                            nombre = { peli.Title }
                            anio = { peli.Year }
                            imagen = { peli.Poster } 
                            tipo = { peli.Type }
                        
                        />

                        )
                    
                    )
                
                }
            </div>

        </Fragment>

    )
}

export default SearchBar;

