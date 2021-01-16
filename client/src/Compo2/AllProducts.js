import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../index.css";
import CatalogoH from '../Components/Catalogo/CatalogoH'

const AllProducts = () => {
  return (
    <div className="carousel-wrapper">
      <section className="section" id="shop">
        <div className="title-container">
          <div className="section-titles">
            <div className="section-title active" data-id="latest">
              <h1 className="primary-title">Todas las cervezas</h1>
            </div>
          </div>
        </div>

        <div className="shop-center product-center container"></div>
      </section>

      <div className="section brands container">
        <div className="glide" id="glide2">
          <div className="glide__track" data-glide-el="track">
           <CatalogoH/>
              {/* <ul >
            <Carousel infiniteLoop autoPlay>
                <li className="glide__slide">
                  <img src={require("../img/scotish.png")} alt="" />
                </li>
                <li className="glide__slide">
                  <img src={require("../img/b1.png")} alt="" />
                </li>
                <li className="glide__slide">
                  <img src={require("../img/b2.png")} alt="" />
                </li>
                <li className="glide__slide">
                  <img src={require("../img/b3.png")} alt="" />
                </li>
                <li className="glide__slide">
                  <img
                    src={require("../img/hobsons-craft-beer-cans.png")}
                    alt=""
                  />
                </li>
                <li className="glide__slide">
                  <img src={require("../img/DTX-Cans-Web.png")} alt="" />
                </li>
            </Carousel>
              </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;