import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Grid = () => {


  const category = useSelector((store) => store.category.categories);


  
  return (
    <div>
      <section class="gallary container">
        <figure class="gallary-item item-1">
          <img src={require("../img/image1.jpg")} alt="" class="gallary-img" />
          <div class="content">
            <h2>LO MEJOR</h2>
            <a href="/products/catalogo/6">Ver</a>
          </div>
        </figure>

        <figure class="gallary-item item-2">
          <img
            src={require("../img/https___cdn.cnn.com_cnnnext_dam_assets_191008155125-frontier-beer-1.jpg")}
            alt=""
            class="gallary-img"
          />
          <div class="content">
            <h2>Lagers</h2>
            <a href="/products/catalogo/3">Ver</a>
          </div>
        </figure>

        <figure class="gallary-item item-3">
          <img src={require("../img/balckbeer.jpg")} alt="" class="gallary-img" />
          <div class="content">
            <h2>Negra</h2>
            <a href="/products/catalogo/4">Ver</a>
          </div>
        </figure>

        <figure class="gallary-item item-4">
          <img src={require("../img/Dillenger-2.png")} alt="" class="gallary-img" />
          <div class="content">
            <h2>Aprovecha los ultimos descuentos!</h2>
            <a href="/catalogo">Ver</a>
          </div>
        </figure>
      </section>
    </div>
  );
};

export default Grid;