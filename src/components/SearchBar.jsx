import React, { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
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

    const changeBody = () => {

        return setPelis([]);

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
            
            <div className=' mt-3 flex justify-center items-center' >

                <Button 
                        variant="secondary"
                        onClick = {changeBody}
                    > 
                        Eliminar busqueda

                </Button>
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

