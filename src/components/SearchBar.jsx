import React, { Fragment, useState } from 'react';
import { Form } from 'react-bootstrap';
import CardMovie from './CardMovie';
import '../App.css';

const SearchBar = () => {
    const[pelis, setPelis] = useState([]);
    const[busqueda, setBusqueda]  = useState("");

    const submitForm  = async (e) => {
        e.preventDefault();
        if(!busqueda) return alert("Escribe algo que pueda buscar...");
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=9b0f82aa&s=${busqueda}`);
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
                        placeholder="Busca tu peli, serie o videojuego...(en inglés)"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}

                    />
                </Form>

            </div>
            
            <div className=' mt-3 flex justify-center'>

                <button 
                    className="px-5 py-2 mt-3 mr-5 bg-red-600 rounded-lg"
                    onClick = {changeBody}
                > 
                    Eliminar busqueda

                </button>
            </div>
            <div>
                
                { !pelis && <p className='mx-auto text-center mt-5 text-blue-600'> No hay resultados. Intenta de nuevo! </p> }
                
                { console.log(pelis) }

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

