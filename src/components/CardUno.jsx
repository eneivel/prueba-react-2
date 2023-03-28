import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import MyContext from "../my-context";

function CardUno() {

    const { pizzas } = useContext(MyContext)
    const navigate = useNavigate()

    return (
        <div>
            <Row md={2} lg={3} className='g-5 m-5'>
                {pizzas.map(pizza => (
                    <Col className='d-flex justify-content-center' key={pizza.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img src={pizza.img} />
                            <Card.Body>
                                <Card.Title className='text-center'>{(`${pizza.name}`)}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='text-center'>
                                    <p>Ingredientes :</p>
                                    <ul className='ingredientes-css'>
                                        {pizza.ingredients.map(ingrediente => (<li key={ingrediente}>{(`${ingrediente}`)} </li>))}
                                    </ul>
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <h3 className='text-center'>$ {(`${pizza.price}`)}</h3>
                                <Row className='text-center'>
                                    <Col>
                                        <Button
                                            variant="secondary" onClick={() => navigate(`/pizza/${pizza.id}`)}>Ver más</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="info">Añadir</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default CardUno;