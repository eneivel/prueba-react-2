import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const BarraNavegacion = () => {
    return (
        <>
            <Navbar bg="info" variant="dark">
                <Container>
                    <Link className="text-white ms-3 text-decoration-none fs-4 fw-bold" to="/">🍕 Pizzería Mamma Mia! </Link>
                    <Link className="justify-content-end  fs-4 fw-bold text-decoration-none" to="/carrito">🛒</Link>
                </Container>
            </Navbar>
        </>
    )

}

export default BarraNavegacion;