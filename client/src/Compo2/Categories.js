import React, { useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../Redux/category";
import { Link } from "react-router-dom";

const Categories = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const dispatch = useDispatch();
  const category = useSelector((store) => store.category.categories);

  useEffect(() => {
    dispatch(getCategory());
  }, []);

 /*  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  }; */

  const list = () => (
    <div>
      <List>
        <ListItem>
          <Link to="/catalogo">Nuestras latas</Link>
        </ListItem>
        {category.map((text) => (
          <ListItem>
            <Link to={`/products/catalogo/${text.id}`}>
              <div className="category-box">{text.name}</div>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
  
      <section class="section category">
        <h2 class="title">Encontra los mejores sabores a tu medida!</h2>
        <div class="category-center container">
          {category.map((e) => (
            <div class="category-box" >
              <img key= {e.image} src={e.image} alt="" />
              <div class="content">
                {/* <h2>Cerveza Lager</h2>
              <span>5 Cervezas</span> */}
                <div>
                  <h2>{e.name}</h2>
                </div>

                <Link to={`/products/catalogo/${e.id}`}>Ver mas </Link>
                
              </div>
            </div>
          ))}

          {/* <div class="category-box">
            <img src={require("../img/Guinness-01.jpg")} alt="" />
            <div class="content">
              <h2>Cerveza Negra</h2>
              <span>4 Cervezas</span>
              <a href="#">comprar ya</a>
            </div>
          </div>

          <div class="category-box">
            <img src={require("../img/beer.jpg")} alt="" />
            <div class="content">
              <h2>Cerveza Roja</h2>
              <span>7 Cervezas</span>
              <a href="#">comprar ya</a>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Categories;
