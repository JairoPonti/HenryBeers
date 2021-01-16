import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "./ProductCard.css";
import { getcarrito } from "../../Redux/Carrito";
import { useSelector, useDispatch } from "react-redux";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});

export default function MediaCard({
  name,
  image,
  stock,
  description,
  categories,
  price,
  id,
}) {
  const user = useSelector((store) => store.user.user);
  const carrito = useSelector((store) => store.carrito.carrito);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.id) {
      dispatch(getcarrito(user.id));

      const fetchData = async () => {
        await axios.post(`http://localhost:4000/users/${user.id}/carrito`);
      };
      fetchData();
    }

    if (user.id && localStorage.carrito) {
      let data = JSON.parse(localStorage.getItem("carrito"));
      // console.log(data.carrito);
      data.carrito.map(async (e) => {
        const { data } = await axios.post(
          `http://localhost:4000/users/${e.productId}/orden/${carrito.id}`
        );
      });
    }
  }, []);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [addProduct, setAddProduct] = useState(false);

  const effectAddingToCart = () => {
    return setTimeout(() => {
      setAddProduct(false);
    }, 1000);
  };

  const handleCart = async () => {
    // Agrega un determinado producto a un carrito en particular
    setAddProduct(true);
    const dataValue = {
      name: name,
      price: price,
      stock: stock,
      quantity: 1,
      productId: id,
    };

    if (!localStorage.token) {
      if (!localStorage.carrito) {
        localStorage.setItem(
          "carrito",
          JSON.stringify({ carrito: [dataValue] })
        );
      }
      const data = JSON.parse(localStorage.getItem("carrito"));
      if (!data.carrito.some((p) => p.productId === id)) {
        data.carrito.push(dataValue);
        localStorage.setItem("carrito", JSON.stringify(data));
      }

      alert("Producto agregado");
    }

    if (user.id && carrito.id) {
      const { data } = await axios.put(
        `http://localhost:4000/users/product/${id}/increment/${carrito.id}`
      );
      await axios.put(`http://localhost:4000/products/decrement/${id}`);
      alert("1 Producto agregado");
    }

    if (user.id) {
      const { data } = await axios.post(
        `http://localhost:4000/users/${id}/orden/${carrito.id}`
      );
    }
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  const classes = useStyles();

  return (
    <Fragment >
      <div style={{ background: "white", marginTop: "0px" }}>
        {stock > 0 && (
          <div className={`containerClass ${addProduct ? "card-waiting" : ""}`}>
            <Card className={classes.root} style={{ width: "340px" }}>
              <CardActionArea>
                <CardMedia
                  style={{
                    width: "150px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  className={classes.media}
                  image={image}
                  title="Cerveza Artesanal"
                />
                <CardContent style={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {name}
                  </Typography>
                  <Typography color="textSecondary" component="h1">
                    ${price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/catalogo/${id}`}>
                  {" "}
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleButtonClick()}
                  >
                    Más información
                  </Button>{" "}
                </Link>
                <Button
                  size="small"
                  color="primary"
                  style={{ marginLeft: "100px" }}
                  onClick={() => handleCart()}
                >
                  <AddShoppingCartIcon />
                </Button>
                {buttonClicked ? (
                  <Product datas={(name, description, price, stock)} />
                ) : null}
              </CardActions>
            </Card>
          </div>
        )}
        {stock <= 0 && (
          <div className="containerClass">
            <Card
              className={classes.root}
              style={{ width: "340px", backgroundColor: "#cebcb5" }}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title="Cerveza Artesanal"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {name}
                  </Typography>
                  <Typography color="textSecondary" component="h1">
                    ${price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <label
                  style={{
                    position: "absolute",
                    fontSize: "30px",
                    paddingTop: "-10px",
                    paddingLeft: "100px",
                  }}
                >
                  Sin stock
                </label>
                {/* <Link to={`/catalogo/${id}`} > <Button size="small" color="primary"  onClick={() => handleButtonClick()} >
          More information 
        </Button> </Link>
     <Button size="small" color="primary" style={{marginLeft: "100px"}} onClick={() => handleCart()} >
     <AddShoppingCartIcon />
      </Button>  
        {buttonClicked ? <Product datas={name, description, price, stock}/> : null}  */}
              </CardActions>
            </Card>
          </div>
        )}
      </div>
    </Fragment>
  );
}