import Card from 'react-bootstrap/Card';
import imagen from '../assets/imgs/pizzas.jpg'
import CardUno from '../components/CardUno';

function Home() {
    return (
      <>
      <Card className="text-light text-center border-light rounded-0">
        <Card.Img src={imagen} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className='fs-1 fw-bold'>Pizzería Mamma Mia!</Card.Title>
          <Card.Text className='fs-2 fw-bold'>
           Tenemos las mejores Pizzas que podrás encontrar!!!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
     <CardUno/>
      </>
    );
  }
  
  export default Home;