import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useContext, useState, useEffect } from "react";
import MyContext from "../my-context";
import { useParams } from 'react-router-dom';

function CardDos() {

    const { pizzas } = useContext(MyContext)
    const { id } = useParams()
    const [seleccion, setSeleccion] = useState({})

    useEffect(() => {
        setSeleccion(pizzas.find(pizza => pizza.id === id))
    }, [id]);

    return (
        <div>
            {seleccion.ingredients === undefined ?
                <h1>cargando</h1>
                :
                <Row className="m-5">
                    <Col>
                        <img src={`${seleccion.img}`} className="card-img-top m-1" alt="foto pizza" />
                    </Col>
                    <Col>
                        <div className="card-body">
                            <h1 className="card-title">{(`${seleccion.name}`)}</h1>
                            <p className="fs-4"> {seleccion.desc}</p>
                            <p>Ingredientes :</p>
                            <ul>
                                {seleccion.ingredients.map(ingrediente => (<li key={ingrediente}>{(`${ingrediente}`)}</li>))}
                            </ul>
                            <Row >
                                <Col>
                                    <p>Precio: ${seleccion.price}</p>
                                </Col>
                                <Col className="p-1">
                                    <Button className="ms-5" variant="secondary">Agregar al carrito</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            }
        </div>
    )
}

export default CardDos;