import { Card } from 'react-bootstrap';

const CardMovie = (props) => {
    
    const {nombre, anio, imagen, tipo} = props

    return (
        
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src = { imagen } alt="Placeholder image" />
                <Card.Body>
                    <Card.Title> { nombre } </Card.Title>
                    <Card.Text>
                        <p>Año de estreno: { anio } </p>
                        <p> Tipo:  { tipo } </p>
                    </Card.Text>
                </Card.Body>
            </Card> 
        </div>

    );

}

export default CardMovie;