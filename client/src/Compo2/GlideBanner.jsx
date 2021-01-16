import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../index.css'

const GlideBanner = () => {

  return (
    <>
      <div class="carousel-wrapper">
        <main>
          <section className="hero">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
              <li class="glide__slide">
                <div className="banner">
                  <div className="banner-content">
                    <span>Lo Nuevo del 2020</span>
                    <h1>CERVEZAS HECHAS PARA VOS!</h1>
                    <h3>Importadas de todo el mundo y al mejor precio</h3>
                    <div className="buttons-group">
                      <Link to="/catalogo">
                        <button>VER MAS</button>
                      </Link>
                    </div>
                  </div>
                    <img src={require("../img/b3.png")} className="special_01" alt="" />
                </div>
              </li>
              <li className="glide__slide">
                <div className="banner">
                  <div className="banner-content">
                    <span>Lo Nuevo del 2020</span>
                    <h1>CERVEZAS HECHAS PARA VOS!</h1>
                    <h3>Importadas de todo el mundo y al mejor precio</h3>
                    <div className="buttons-group">
                      <Link to="/catalogo">
                        <button>VER MAS</button>
                      </Link>
                    </div>
                  </div>
                    <img src={require("../img/b1.png")} className="special_02" alt="" />
                </div>
              </li>

              <li className="glide__slide">
                <div className="banner">
                  <div className="banner-content">
                    <span>Lo Nuevo del 2020</span>
                    <h1>CERVEZAS HECHAS PARA VOS!</h1>
                    <h3>Importadas de todo el mundo y al mejor precio</h3>
                    <div className="buttons-group">
                    <Link to="/catalogo">
                        <button>VER MAS</button>
                      </Link>
                    </div>
                  </div>
                  <img src={require("../img/b2.png")} className="special_03" alt="" />
                </div>
              </li>

            </Carousel>
          </section>
        </main>
      </div>
    </>
  );
};
export default GlideBanner;
