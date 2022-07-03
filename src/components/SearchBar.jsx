import React, { Fragment, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import CardMovie from './CardMovie';

const SearchBar = () => {
    const[pelis, setPelis] = useState([]);
    const[busqueda, setBusqueda]  = useState("");

    const handleSubmit  = async (e) => {
        e.preventDefault();
        const data = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=9b0f82aa&s=${busqueda}');
        const response = await data.json()
        setPelis(response.Search)

    }

    useEffect(() => {

        handleSubmit()

    },[])

    return (
  
        <Fragment>

            <div className='flex justify-center items-center'>

                <Form onSubmit={handleSubmit()}>
                    <input 
                        className='text-2xl'
                        type="text"
                        placeholder="Busca tu peli, serie..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                
                    />
                </Form>

            </div>

            <div>
                {
                    pelis.length === 0 ? <p> No se encuentran resultados </p> 
                    
                    : pelis.map(peli => (
                        <CardMovie 
                            peli = {peli}
                            key = {peli.imdID}
                            nombre = {peli.TItle}
                            imagen = {peli.Poster}
                            tipo = {peli.Type}
                        
                        />

                        )
                    
                    )
                
                }
            </div>

        </Fragment>

    )
}

export default SearchBar;

