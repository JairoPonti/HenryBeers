import React from "react";
import  {useDispatch, useSelector} from "react-redux"; 
import {logoutUser} from '../Redux/user'

const Footer = () => {

  const usuario = useSelector(store => store.user.user)
  const dispatch = useDispatch()

  return (
    <div>
      <footer id="footer" className="section footer">
        <div className="container">
          <div className="footer-container">
           {/*  <div className="footer-center">
              <h3>EXTRAS</h3>
              <a href="#">Regalos</a>
              <a href="#">Localizacion</a>
            </div> */}
            <div className="footer-center">
              <h3>INFORMACION</h3>
              <a href="#">Sobre Nosotos</a>
              
              <a href="#">Contactanos</a>
            </div>
            <div className="footer-center">
              <h3>MI CUENTA</h3>
              <a href="/">Inicio</a>
              <a href="/carrito">Mi carrito</a>
              <a  onClick={() => dispatch(logoutUser())} href="/">Salir</a>
            </div>
            <div className="footer-center">
              <h3>CONTACTANOS</h3>
              <div>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                Henry's adress, remote.
              </div>
              <div>
                <span>
                  <i className="far fa-envelope"></i>
                </span>
                henrybeer@gmail.com
              </div>
              <div>
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                +54 3416144151
              </div>
              <div>
                <span>
                  <i className="far fa-paper-plane"></i>
                </span>
                Dream City
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
