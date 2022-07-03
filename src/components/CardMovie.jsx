import { Card } from 'react-bootstrap';
import '../App.css';

const CardMovie = (props) => {
    
    const {nombre, anio, imagen, tipo} = props

    return (
        
        <div className='inline-table rounded-3xl border-spacing-x-10 border-spacing-y-5 h-64 w-64 bg-green-800 tracking-wider mx-8 my-8'>
            <Card>
                <Card.Img className='h-full w-full' variant="top" src = { imagen }/>
                <Card.Body className=' text-center text-base decoration-blue-100 mx-5 my-5'>
                    <Card.Title> { nombre } </Card.Title>
                    <Card.Text className='mx-2 my-2'>
                        <p>Año de estreno: { anio } </p>
                    </Card.Text>
                    <Card.Text className='mx-2 my-2'>
                        <p> Tipo:  { tipo } </p>
                    </Card.Text>
                </Card.Body>
            </Card> 
        </div>

    );

}

export default CardMovie;