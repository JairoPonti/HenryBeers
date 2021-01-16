import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container } from "@material-ui/core";
import Catalogo from "../Catalogo/Catalogo";

function Carrusel(props) {
  var items = [
    {
      name: "Marcelo Tinelli",
      description: "Las cervezas más ricas que probé...",
      img:
        "https://www.alafresca.com.ar/wp-content/uploads/2020/04/image-asset.jpeg",
    },
    {
      name: "Amy Lee",
      description: "Very nice beers! And with a lot of body!",
    },
    {
      name: "Amy Lee",
      description: "Very nice beers! And with a lot of body!",
      img: '',
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Container maxWidth="sm">
    <Paper>
      <h2>{props.item.name}</h2>
      <div>{props.item.div}</div>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
    </Container>
  );
}

export default Carrusel;
