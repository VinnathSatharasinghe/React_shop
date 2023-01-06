import Card from 'react-bootstrap/Card';
import React from 'react';
import Products from './Products';



const Home = () => {

  return (
   
   <div className="hero">
    <Card className="bg-dark text-white-0">
      <Card.Img src="planet-volumes-v_CQ10cps_Y-unsplash.jpg" class="card-img" alt="Background" />
      <Card.ImgOverlay>
        <h6 class = "card-title display-3 fw-bolder mb-0"> Welcome to Winny Collection </h6>
        <h6 class = "card-title display-6 fw-bolder mb-0">  Welcome to Winny Collection </h6>
      </Card.ImgOverlay>
    </Card>
    <Products/>
    </div>

  );
}

export default Home;