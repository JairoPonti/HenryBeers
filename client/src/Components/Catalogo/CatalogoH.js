import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getbeers } from "../../Redux/beer";
import "./Catalogo.css";
import Button from "@material-ui/core/Button";

function CatalogoH({ category, search, products }) {
  const [productscatalogo, setProductscatalogo] = useState();
  const dispatch = useDispatch();
  const beer = useSelector((store) => store.beer.beers);

  useEffect(() => {
    dispatch(getbeers());
  }, []);

  useEffect(() => {
    dispatch(getbeers());
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/products/${
          category
            ? "categoria/" + category
            : search
            ? "find/search?name=" + search
            : ""
        }`
      );
      setProductscatalogo(data);
    };
    fetchData();
  }, [products]);

  // console.log(productscatalogo);

  return (
    <div><br/><br/>
           <div className="catalogo2">
        <div className="catalogo">
          {productscatalogo &&
            productscatalogo.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
                stock={p.stock}
                category={p.category}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CatalogoH;