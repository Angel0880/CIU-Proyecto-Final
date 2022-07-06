import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import CardMovie from './CardMovie';
import '../App.css';


const SearchBar = () => {
    const[pelis, setPelis] = useState([]);
    const[busqueda, setBusqueda]  = useState("");

    const submitForm  = async (e) => {
        e.preventDefault();
        if(!busqueda) return alert("Escribe algo que pueda buscar...");
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9b0f82aa&s=${busqueda}`);
        const data = await response.json()
        setPelis(data.Search)

    }

    return (
  
        <Fragment>

            <div className='flex justify-center items-center'>

                <Form onSubmit={submitForm}>
                    <input 
                        type="text"
                        placeholder="Busca tu peli, serie...(en inglés)"
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

