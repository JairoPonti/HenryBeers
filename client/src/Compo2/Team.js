import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TeamPage from "./Nosotros";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="u-body u-overlap u-overlap-contrast u-overlap-transparent">
      <section
        className="u-align-center u-clearfix u-grey-90 u-section-1"
        id="carousel_fc79"
      >
        <div className="u-expanded-height u-palette-3-base u-shape u-shape-rectangle u-shape-1"></div>
        <div className="u-expanded-height u-palette-3-base u-shape u-shape-rectangle u-shape-2"></div>
        <div className="u-list u-repeater u-list-1">
          <div className="u-align-center-xs u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-top-xl u-container-layout-1">
              <div
                alt=""
                className="u-align-left u-border-8 u-border-grey-75 u-image u-image-circle u-image-5"
                data-animation-name="slideIn"
                data-animation-duration="1000"
                data-animation-delay="0"
                data-animation-direction="Down"
              ></div>
              <div className="u-align-center-xs u-container-style u-group u-group-1">
                <div className="u-container-layout u-container-layout-2">
                  <h4 className="u-custom-font u-font-oswald u-text u-text-1">
                    Gimena Segovia
                  </h4>
                  <h5 className="u-custom-font u-text u-text-font u-text-palette-3-base u-text-2">
                    Fullstack developer
                  </h5>
                  <p className="u-text u-text-grey-10 u-text-3">
                  "Me gustan los nuevos desafíos y trabajar en equipo. 
                  Me siento cómoda en el backend pero deseo continuar aprendiendo y ampliar los conocimientos en todas las áreas.
                  Aspiro a formarme como profesional en el área de desarrollo web y software."
                  </p>

                  <div className="u-social-icons u-spacing-10 u-text-white u-social-icons-1">
                    <a className="u-social-url" target="_blank" href="https://www.facebook.com/gimena.m.segovia/">
                      <span className="u-icon u-icon-circle u-social-facebook u-social-type-color u-icon-1 ">
                        <svg
                          className="u-svg-link u-icon-1"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="https://www.facebook.com/gimena.m.segovia/"
                            xlinkHref="#svg-b2c8"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="https://www.facebook.com/gimena.m.segovia/"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content ico-face u-icon-1"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-b2c8"
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
                c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    {/* <a className="u-social-url"  href="">
                      <span className="u-icon u-icon-circle u-social-twitter u-social-type-color u-icon-2 ico-twitter">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref=""
                            xlinkHref="#svg-01a1"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref=""
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-01a1"
                        >
                          <circle
                            fill="currentColor"
                            className="st0"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
            c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
            c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
            c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
            c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                          ></path>
                        </svg>
                      </span>
                    </a> */}
                    <a className="u-social-url" target="_blank" href="https://www.instagram.com/gimmarybel/">
                      <span className="u-icon u-icon-circle u-social-instagram u-social-type-color u-icon-3 ico-instagram">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" /* style="" */
                        >
                          <use
                            xlinkHref="https://www.instagram.com/gimmarybel/"
                            xlinkHref="#svg-3514"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="https://www.instagram.com/gimmarybel/"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-3514" /* style="color: rgb(197, 54, 164);" */
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
            z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
            C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
            c5.5,0,9.9,4.5,9.9,9.9V73.3z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://www.linkedin.com/in/gimena-segovia-a81370bb/">
                      <span className="u-icon u-icon-circle u-social-linkedin u-social-type-color u-icon-4 ico-linkedin">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" /* style="" */
                        >
                          <use
                            xlinkHref="https://www.linkedin.com/in/gimena-segovia-a81370bb/"
                            xlinkHref="#svg-0522"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="https://www.linkedin.com/in/gimena-segovia-a81370bb/"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-0522" /* style="color: rgb(0, 122, 185);" */
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
            C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
            H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    {/* <a className="u-social-url" target="_blank" href="#">
                      <span className="u-icon u-icon-circle u-social-google u-social-type-color u-icon-5 ico-google">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" /* style="" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-18cd"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-18cd" /* style="color: rgb(220, 78, 65);" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M60.8,76.3c-6.6,8.6-19,11.1-29,7.7c-10.6-3.5-18.4-14.2-18.2-25.5C13,44.6,25.3,31.8,39.1,31.6
            c7.1-0.6,14,2.1,19.3,6.6c-2.2,2.4-4.4,4.8-6.9,7.1c-4.8-2.9-10.4-5-15.9-3.1c-8.8,2.6-14.3,13-10.9,21.8
            c2.7,9.1,13.7,14.1,22.5,10.2c4.5-1.6,7.5-5.7,8.7-10.2c-5.1-0.1-10.2,0-15.5-0.2c0-3,0-6.1,0-9.2c8.6,0,17.1,0,25.7,0
            C66.7,62.3,65.5,70.4,60.8,76.3z M98.3,62.5c-2.6,0-5.1,0-7.7,0c0,2.6,0,5.1,0,7.7c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7
            c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7c2.6,0,5.1,0,7.7,0c0-2.6,0-5.1,0.1-7.7c2.6,0,5.1,0,7.7,0c0,2.6,0,5.1,0,7.7
            c2.6,0,5.1,0,7.7,0C98.3,57.3,98.3,59.9,98.3,62.5z"
                          ></path>
                        </svg>
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>






          {/* CAMILA */}
          <div className="u-align-center-xs u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-top-xl u-container-layout-1">
              <div
                alt=""
                className="u-align-left u-border-8 u-border-grey-75 u-image u-image-circle u-image-6"
                data-animation-name="slideIn"
                data-animation-duration="1000"
                data-animation-delay="0"
                data-animation-direction="Down"
              ></div>
              <div className="u-align-center-xs u-container-style u-group u-group-1">
                <div className="u-container-layout u-container-layout-2">
                  <h4 className="u-custom-font u-font-oswald u-text u-text-1">
                    Camila Fernandez
                  </h4>
                  <h5 className="u-custom-font u-text u-text-font u-text-palette-3-base u-text-2">
                    Fullstack developer
                  </h5>
                  <p className="u-text u-text-grey-10 u-text-3">
                    "Me interesa el Back, es donde más
                    <br />
                    cómoda me siento. Quiero profundizar más
                    <br />
                    mis conocimientos y lograr destacarme en el área.
                    <br />
                   Me gusta trabajar en equipo!"
                    <br />
                  </p>
                  <div className="u-social-icons u-spacing-10 u-text-white u-social-icons-1">
                    {/* <a className="u-social-url" href="#">
                      <span className="u-icon u-icon-circle u-social-facebook u-social-type-color u-icon-1 ">
                        <svg
                          className="u-svg-link u-icon-1"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="#"
                            xlinkHref="#svg-b2c8"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="#"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content ico-face u-icon-1"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-b2c8"
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
                c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                          ></path>
                        </svg>
                      </span>
                    </a> */}
                    {/* <a className="u-social-url" href="#">
                      <span className="u-icon u-icon-circle u-social-twitter u-social-type-color u-icon-2 ico-twitter">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="#"
                            xlinkHref="#svg-01a1"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="#"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-01a1"
                        >
                          <circle
                            fill="currentColor"
                            className="st0"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
            c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
            c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
            c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
            c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                          ></path>
                        </svg>
                      </span>
                    </a> */}
                    <a className="u-social-url" target="_blank" href="https://www.instagram.com/camii_ffernandez/">
                      <span className="u-icon u-icon-circle u-social-instagram u-social-type-color u-icon-3 ico-instagram">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-3514"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-3514" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
            z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
            C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
            c5.5,0,9.9,4.5,9.9,9.9V73.3z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    {/* <a className="u-social-url" target="_blank" href="#">
                      <span className="u-icon u-icon-circle u-social-linkedin u-social-type-color u-icon-4 ico-linkedin">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-0522"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-0522"
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
            C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
            H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"
                          ></path>
                        </svg>
                      </span>
                    </a> */}
                    <a className="u-social-url" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=camilaff94@gmail.com">
                      <span className="u-icon u-icon-circle u-social-google u-social-type-color u-icon-5 ico-google">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-18cd"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-18cd"
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M60.8,76.3c-6.6,8.6-19,11.1-29,7.7c-10.6-3.5-18.4-14.2-18.2-25.5C13,44.6,25.3,31.8,39.1,31.6
            c7.1-0.6,14,2.1,19.3,6.6c-2.2,2.4-4.4,4.8-6.9,7.1c-4.8-2.9-10.4-5-15.9-3.1c-8.8,2.6-14.3,13-10.9,21.8
            c2.7,9.1,13.7,14.1,22.5,10.2c4.5-1.6,7.5-5.7,8.7-10.2c-5.1-0.1-10.2,0-15.5-0.2c0-3,0-6.1,0-9.2c8.6,0,17.1,0,25.7,0
            C66.7,62.3,65.5,70.4,60.8,76.3z M98.3,62.5c-2.6,0-5.1,0-7.7,0c0,2.6,0,5.1,0,7.7c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7
            c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7c2.6,0,5.1,0,7.7,0c0-2.6,0-5.1,0.1-7.7c2.6,0,5.1,0,7.7,0c0,2.6,0,5.1,0,7.7
            c2.6,0,5.1,0,7.7,0C98.3,57.3,98.3,59.9,98.3,62.5z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>




          {/* ALEXIS */}
          <div className="u-align-center-xs u-container-style u-list-item u-repeater-item u-list-item-1">
            <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-top-xl u-container-layout-1">
              <div
                alt=""
                className="u-align-left u-border-8 u-border-grey-75 u-image u-image-circle u-image-1"
                data-animation-name="slideIn"
                data-animation-duration="1000"
                data-animation-delay="0"
                data-animation-direction="Down"
              ></div>
              <div className="u-align-center-xs u-container-style u-group u-group-1">
                <div className="u-container-layout u-container-layout-2">
                  <h4 className="u-custom-font u-font-oswald u-text u-text-1">
                    Alexis Aguirre
                  </h4>
                  <h5 className="u-custom-font u-text u-text-font u-text-palette-3-base u-text-2">
                    Fullstack developer
                  </h5>
                  <p className="u-text u-text-grey-10 u-text-3">
                "Me gusta mucho trabajar en equipo.<br/>
                Experimento con distintos estilos en el Front<br/>
                y mis próximas metas están vinculadas <br/>
                a profundizar en UI/UX"<br/>
                </p>
                  <div className="u-social-icons u-spacing-10 u-text-white u-social-icons-1">
                    <a className="u-social-url" target="_blank" href="https://www.facebook.com/ale.aguirre.31586/">
                      <span className="u-icon u-icon-circle u-social-facebook u-social-type-color u-icon-1 ">
                        <svg
                          className="u-svg-link u-icon-1"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="https://www.facebook.com/ale.aguirre.31586/"
                            xlinkHref="#svg-b2c8"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="https://www.facebook.com/ale.aguirre.31586/"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content ico-face u-icon-1"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-b2c8"
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
                c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://twitter.com/AlexxsAguirre">
                      <span className="u-icon u-icon-circle u-social-twitter u-social-type-color u-icon-2 ico-twitter">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="https://twitter.com/AlexxsAguirre"
                            xlinkHref="#svg-01a1"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="https://twitter.com/AlexxsAguirre"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-01a1"
                        >
                          <circle
                            fill="currentColor"
                            className="st0"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
            c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
            c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
            c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
            c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://www.instagram.com/alexis.aguirrre/?hl=es-la">
                      <span className="u-icon u-icon-circle u-social-instagram u-social-type-color u-icon-3 ico-instagram">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-3514"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-3514" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
            z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
            C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
            c5.5,0,9.9,4.5,9.9,9.9V73.3z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://www.linkedin.com/in/alexis-aguirre-cordoba/">
                      <span className="u-icon u-icon-circle u-social-linkedin u-social-type-color u-icon-4 ico-linkedin">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-0522"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-0522" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
            C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
            H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aguirrealexis.cba@gmail.com">
                      <span className="u-icon u-icon-circle u-social-google u-social-type-color u-icon-5 ico-google">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="cecicaccamo@gmail.com"
                            xlinkHref="#svg-18cd"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-18cd" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M60.8,76.3c-6.6,8.6-19,11.1-29,7.7c-10.6-3.5-18.4-14.2-18.2-25.5C13,44.6,25.3,31.8,39.1,31.6
            c7.1-0.6,14,2.1,19.3,6.6c-2.2,2.4-4.4,4.8-6.9,7.1c-4.8-2.9-10.4-5-15.9-3.1c-8.8,2.6-14.3,13-10.9,21.8
            c2.7,9.1,13.7,14.1,22.5,10.2c4.5-1.6,7.5-5.7,8.7-10.2c-5.1-0.1-10.2,0-15.5-0.2c0-3,0-6.1,0-9.2c8.6,0,17.1,0,25.7,0
            C66.7,62.3,65.5,70.4,60.8,76.3z M98.3,62.5c-2.6,0-5.1,0-7.7,0c0,2.6,0,5.1,0,7.7c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7
            c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7c2.6,0,5.1,0,7.7,0c0-2.6,0-5.1,0.1-7.7c2.6,0,5.1,0,7.7,0c0,2.6,0,5.1,0,7.7
            c2.6,0,5.1,0,7.7,0C98.3,57.3,98.3,59.9,98.3,62.5z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CECILIA */}
          <div className="u-align-center-xs u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-valign-top-lg u-valign-top-xl u-container-layout-3">
              <div
                alt=""
                className="u-align-left u-border-8 u-border-grey-75 u-image u-image-circle u-image-2"
                data-animation-name="slideIn"
                data-animation-duration="1000"
                data-animation-delay="0"
                data-animation-direction="Down"
              ></div>
              <div className="u-align-center-xs u-container-style u-group u-group-2">
                <div className="u-container-layout u-container-layout-4">
                  <h4 className="u-custom-font u-font-oswald u-text u-text-default u-text-4">
                    Cecilia Caccamo
                  </h4>
                  <h5 className="u-custom-font u-text u-text-default u-text-font u-text-palette-3-base u-text-5">
                    FULLSTACK DEVELOPER
                  </h5>
                  <p className="u-text u-text-grey-10 u-text-6">
                    "Creo que lo fundamental es trabajar en equipo. <br />
                    Me gusta desempeñarme en el Front, pero <br />
                    mi desafío es desarrollarme en el back."
                  </p>
                  <div className="u-social-icons u-spacing-10 u-text-white u-social-icons-1">
                    <a className="u-social-url" target="_blank" href="https://www.facebook.com/cecilia.caccamo.7">
                      <span className="u-icon u-icon-circle u-social-facebook u-social-type-color u-icon-1 ">
                        <svg
                          className="u-svg-link u-icon-1"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="https://www.facebook.com/cecilia.caccamo.7"
                            xlinkHref="#svg-b2c8"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="https://www.facebook.com/cecilia.caccamo.7"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content ico-face u-icon-1"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-b2c8"
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
                c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://twitter.com/cecicaccamo">
                      <span className="u-icon u-icon-circle u-social-twitter u-social-type-color u-icon-2 ico-twitter">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="https://twitter.com/cecicaccamo"
                            xlinkHref="#svg-01a1"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="https://twitter.com/cecicaccamo"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-01a1"
                        >
                          <circle
                            fill="currentColor"
                            className="st0"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
            c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
            c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
            c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
            c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://www.instagram.com/ceciliacaccamo">
                      <span className="u-icon u-icon-circle u-social-instagram u-social-type-color u-icon-3 ico-instagram">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="https://www.instagram.com/ceciliacaccamo"
                            xlinkHref="#svg-3514"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="https://www.instagram.com/ceciliacaccamo"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-3514" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
            z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
            C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
            c5.5,0,9.9,4.5,9.9,9.9V73.3z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://www.linkedin.com/in/ceci-caccamo/">
                      <span className="u-icon u-icon-circle u-social-linkedin u-social-type-color u-icon-4 ico-linkedin">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-0522"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-0522"
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
            C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
            H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=cecicaccamo@gmail.com">
                      <span className="u-icon u-icon-circle u-social-google u-social-type-color u-icon-5 ico-google">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-18cd"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-18cd" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M60.8,76.3c-6.6,8.6-19,11.1-29,7.7c-10.6-3.5-18.4-14.2-18.2-25.5C13,44.6,25.3,31.8,39.1,31.6
            c7.1-0.6,14,2.1,19.3,6.6c-2.2,2.4-4.4,4.8-6.9,7.1c-4.8-2.9-10.4-5-15.9-3.1c-8.8,2.6-14.3,13-10.9,21.8
            c2.7,9.1,13.7,14.1,22.5,10.2c4.5-1.6,7.5-5.7,8.7-10.2c-5.1-0.1-10.2,0-15.5-0.2c0-3,0-6.1,0-9.2c8.6,0,17.1,0,25.7,0
            C66.7,62.3,65.5,70.4,60.8,76.3z M98.3,62.5c-2.6,0-5.1,0-7.7,0c0,2.6,0,5.1,0,7.7c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7
            c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7c2.6,0,5.1,0,7.7,0c0-2.6,0-5.1,0.1-7.7c2.6,0,5.1,0,7.7,0c0,2.6,0,5.1,0,7.7
            c2.6,0,5.1,0,7.7,0C98.3,57.3,98.3,59.9,98.3,62.5z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* JAIRO */}
          <div className="u-align-center-xs u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-top-xl u-container-layout-5">
              <div
                alt=""
                className="u-align-left u-border-8 u-border-grey-75 u-image u-image-circle u-image-3"
                data-animation-name="slideIn"
                data-animation-duration="1000"
                data-animation-delay="0"
                data-animation-direction="Down"
              ></div>
              <div className="u-align-center-xs u-container-style u-group u-group-3">
                <div className="u-container-layout u-container-layout-6">
                  <h4 className="u-custom-font u-font-oswald u-text u-text-default u-text-7">
                    Jairo Ponti
                  </h4>
                  <h5 className="u-custom-font u-text u-text-default u-text-font u-text-palette-3-base u-text-8">
                    FULLSTACK DEVELOPER
                  </h5>
                  <p className="u-text u-text-grey-10 u-text-9">
                   "Me apasiona la tecnología y la programación. 
                    <br />
                    Mis próximas metas son aprender otros lenguajes,
                    <br />
                    y me encantaría inclinarme al Mobile Development."
                   
                  </p>
                  <div className="u-social-icons u-spacing-10 u-text-white u-social-icons-1">
                    <a className="u-social-url" target="_blank" href="https://www.facebook.com/jairomarcelo.ponti">
                      <span className="u-icon u-icon-circle u-social-facebook u-social-type-color u-icon-1 ">
                        <svg
                          className="u-svg-link u-icon-1"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="https://www.facebook.com/jairomarcelo.ponti/"
                            xlinkHref="#svg-b2c8"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="https://www.facebook.com/jairomarcelo.ponti/"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content ico-face u-icon-1"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-b2c8"
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
                c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                   {/*  <a className="u-social-url"  href="#">
                      <span className="u-icon u-icon-circle u-social-twitter u-social-type-color u-icon-2 ico-twitter">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="#"
                            xlinkHref="#svg-01a1"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="#"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-01a1"
                        >
                          <circle
                            fill="currentColor"
                            className="st0"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
            c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
            c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
            c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
            c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                          ></path>
                        </svg>
                      </span>
                    </a> */}
                    <a className="u-social-url" target="_blank" href="https://www.instagram.com/Vily_arg/">
                      <span className="u-icon u-icon-circle u-social-instagram u-social-type-color u-icon-3 ico-instagram">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-3514"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-3514" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
            z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
            C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
            c5.5,0,9.9,4.5,9.9,9.9V73.3z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://www.linkedin.com/in/jairo-marcelo-ponti-048016180/">
                      <span className="u-icon u-icon-circle u-social-linkedin u-social-type-color u-icon-4 ico-linkedin">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-0522"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-0522" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
            C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
            H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                     <a className="u-social-url" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=giorgioramirez@gmail.com">
                      <span className="u-icon u-icon-circle u-social-google u-social-type-color u-icon-5 ico-google">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-18cd"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-18cd" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M60.8,76.3c-6.6,8.6-19,11.1-29,7.7c-10.6-3.5-18.4-14.2-18.2-25.5C13,44.6,25.3,31.8,39.1,31.6
            c7.1-0.6,14,2.1,19.3,6.6c-2.2,2.4-4.4,4.8-6.9,7.1c-4.8-2.9-10.4-5-15.9-3.1c-8.8,2.6-14.3,13-10.9,21.8
            c2.7,9.1,13.7,14.1,22.5,10.2c4.5-1.6,7.5-5.7,8.7-10.2c-5.1-0.1-10.2,0-15.5-0.2c0-3,0-6.1,0-9.2c8.6,0,17.1,0,25.7,0
            C66.7,62.3,65.5,70.4,60.8,76.3z M98.3,62.5c-2.6,0-5.1,0-7.7,0c0,2.6,0,5.1,0,7.7c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7
            c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7c2.6,0,5.1,0,7.7,0c0-2.6,0-5.1,0.1-7.7c2.6,0,5.1,0,7.7,0c0,2.6,0,5.1,0,7.7
            c2.6,0,5.1,0,7.7,0C98.3,57.3,98.3,59.9,98.3,62.5z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* JUAN CRUZ */}
          <div className="u-align-center-xs u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-top-xl u-container-layout-7">
              <div
                alt=""
                className="u-align-left u-border-8 u-border-grey-75 u-image u-image-circle u-image-4"
                data-animation-name="slideIn"
                data-animation-duration="1000"
                data-animation-delay="0"
                data-animation-direction="Down"
              ></div>
              <div className="u-align-center-xs u-container-style u-group u-group-4">
                <div className="u-container-layout u-container-layout-8">
                  <h4 className="u-custom-font u-font-oswald u-text u-text-default u-text-10">
                    Juan Cruz Castro
                  </h4>
                  <h5 className="u-custom-font u-text u-text-default u-text-font u-text-palette-3-base u-text-11">
                    FULLSTACK DEVELOPER
                  </h5>
                  <p className="u-text u-text-grey-10 u-text-12">
                    "Me considero un Desarrollador proactivo
                    
                   y creativo, con capacidades de resolución
                    <br />
                   de conflictos. Aspiro a formar parte de
                   
                   una gran empresa y poder crecer profesionalmente."
                  </p>
                  <div className="u-social-icons u-spacing-10 u-text-white u-social-icons-1">
                    {/* <a className="u-social-url" target="_blank" href="#/">
                      <span className="u-icon u-icon-circle u-social-facebook u-social-type-color u-icon-1 ">
                        <svg
                          className="u-svg-link u-icon-1"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="https://www.facebook.com/ale.aguirre.31586/"
                            xlinkHref="#svg-b2c8"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="https://www.facebook.com/ale.aguirre.31586/"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content ico-face u-icon-1"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-b2c8"
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
                c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                          ></path>
                        </svg>
                      </span>
                    </a> */}
                   {/*  <a className="u-social-url" target="_blank" href="https://twitter.com/AlexxsAguirre">
                      <span className="u-icon u-icon-circle u-social-twitter u-social-type-color u-icon-2 ico-twitter">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="https://twitter.com/AlexxsAguirre"
                            xlinkHref="#svg-01a1"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="https://twitter.com/AlexxsAguirre"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-01a1"
                        >
                          <circle
                            fill="currentColor"
                            className="st0"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
            c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
            c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
            c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
            c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                          ></path>
                        </svg>
                      </span>
                    </a> */}
                    <a className="u-social-url" target="_blank" href="https://www.instagram.com/Juaancastro02">
                      <span className="u-icon u-icon-circle u-social-instagram u-social-type-color u-icon-3 ico-instagram">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-3514"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-3514"
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
            z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
            C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
            c5.5,0,9.9,4.5,9.9,9.9V73.3z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://www.linkedin.com/in/juan-cruz-castro-1469041b2">
                      <span className="u-icon u-icon-circle u-social-linkedin u-social-type-color u-icon-4 ico-linkedin">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-0522"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-0522"
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
            C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
            H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=juancruzcastro04@gmail.com">
                      <span className="u-icon u-icon-circle u-social-google u-social-type-color u-icon-5 ico-google">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-18cd"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-18cd" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M60.8,76.3c-6.6,8.6-19,11.1-29,7.7c-10.6-3.5-18.4-14.2-18.2-25.5C13,44.6,25.3,31.8,39.1,31.6
            c7.1-0.6,14,2.1,19.3,6.6c-2.2,2.4-4.4,4.8-6.9,7.1c-4.8-2.9-10.4-5-15.9-3.1c-8.8,2.6-14.3,13-10.9,21.8
            c2.7,9.1,13.7,14.1,22.5,10.2c4.5-1.6,7.5-5.7,8.7-10.2c-5.1-0.1-10.2,0-15.5-0.2c0-3,0-6.1,0-9.2c8.6,0,17.1,0,25.7,0
            C66.7,62.3,65.5,70.4,60.8,76.3z M98.3,62.5c-2.6,0-5.1,0-7.7,0c0,2.6,0,5.1,0,7.7c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7
            c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7c2.6,0,5.1,0,7.7,0c0-2.6,0-5.1,0.1-7.7c2.6,0,5.1,0,7.7,0c0,2.6,0,5.1,0,7.7
            c2.6,0,5.1,0,7.7,0C98.3,57.3,98.3,59.9,98.3,62.5z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* JORGE  */}
          <div className="u-align-center-xs u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-top-xl u-container-layout-7">
              <div
                alt=""
                className="u-align-left u-border-8 u-border-grey-75 u-image u-image-circle u-image-7"
                data-animation-name="slideIn"
                data-animation-duration="1000"
                data-animation-delay="0"
                data-animation-direction="Down"
              ></div>
              <div className="u-align-center-xs u-container-style u-group u-group-4">
                <div className="u-container-layout u-container-layout-8">
                  <h4 className="u-custom-font u-font-oswald u-text u-text-default u-text-10">
                    Jorge Elieser
                  </h4>
                  <h5 className="u-custom-font u-text u-text-default u-text-font u-text-palette-3-base u-text-11">
                    FULLSTACK DEVELOPER
                  </h5>
                  <p className="u-text u-text-grey-10 u-text-12">
                    "Entusiasta estudiante de FullStack Dev
                    <br />
                   y eterno aprendiz de la vida."
              
                  </p>
                  <div className="u-social-icons u-spacing-10 u-text-white u-social-icons-1">
                    {/* <a className="u-social-url" target="_blank" href="https://www.facebook.com/ale.aguirre.31586/">
                      <span className="u-icon u-icon-circle u-social-facebook u-social-type-color u-icon-1 ">
                        <svg
                          className="u-svg-link u-icon-1"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="https://www.facebook.com/ale.aguirre.31586/"
                            xlinkHref="#svg-b2c8"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="https://www.facebook.com/ale.aguirre.31586/"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content ico-face u-icon-1"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-b2c8"
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
                c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                          ></path>
                        </svg>
                      </span>
                    </a> */}
                    <a className="u-social-url" target="_blank" href="https://twitter.com/jorgetuiter">
                      <span className="u-icon u-icon-circle u-social-twitter u-social-type-color u-icon-2 ico-twitter">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="https://twitter.com/jorgetuiter"
                            xlinkHref="#svg-01a1"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="https://twitter.com/jorgetuiter"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-01a1"
                        >
                          <circle
                            fill="currentColor"
                            className="st0"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
            c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
            c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
            c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
            c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://www.instagram.com/jorge.elieser">
                      <span className="u-icon u-icon-circle u-social-instagram u-social-type-color u-icon-3 ico-instagram">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-3514"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-3514" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
            z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
            C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
            c5.5,0,9.9,4.5,9.9,9.9V73.3z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://www.linkedin.com/in/jorge-elieser-ramirez-pe%C3%B1a-75565429/">
                      <span className="u-icon u-icon-circle u-social-linkedin u-social-type-color u-icon-4 ico-linkedin">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-0522"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-0522" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
            C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
            H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=giorgioramirez@gmail.com">
                      <span className="u-icon u-icon-circle u-social-google u-social-type-color u-icon-5 ico-google">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-18cd"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-18cd" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M60.8,76.3c-6.6,8.6-19,11.1-29,7.7c-10.6-3.5-18.4-14.2-18.2-25.5C13,44.6,25.3,31.8,39.1,31.6
            c7.1-0.6,14,2.1,19.3,6.6c-2.2,2.4-4.4,4.8-6.9,7.1c-4.8-2.9-10.4-5-15.9-3.1c-8.8,2.6-14.3,13-10.9,21.8
            c2.7,9.1,13.7,14.1,22.5,10.2c4.5-1.6,7.5-5.7,8.7-10.2c-5.1-0.1-10.2,0-15.5-0.2c0-3,0-6.1,0-9.2c8.6,0,17.1,0,25.7,0
            C66.7,62.3,65.5,70.4,60.8,76.3z M98.3,62.5c-2.6,0-5.1,0-7.7,0c0,2.6,0,5.1,0,7.7c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7
            c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7c2.6,0,5.1,0,7.7,0c0-2.6,0-5.1,0.1-7.7c2.6,0,5.1,0,7.7,0c0,2.6,0,5.1,0,7.7
            c2.6,0,5.1,0,7.7,0C98.3,57.3,98.3,59.9,98.3,62.5z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


              {/* Martina */}
          <div className="u-align-center-xs u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-valign-bottom-lg u-valign-top-xl u-container-layout-7">
              <div
                alt=""
                className="u-align-left u-border-8 u-border-grey-75 u-image u-image-circle u-image-8"
                data-animation-name="slideIn"
                data-animation-duration="1000"
                data-animation-delay="0"
                data-animation-direction="Down"
              ></div>
              <div className="u-align-center-xs u-container-style u-group u-group-4">
                <div className="u-container-layout u-container-layout-8">
                  <h4 className="u-custom-font u-font-oswald u-text u-text-default u-text-10">
                    Martina Scomazzon
                  </h4>
                  <h5 className="u-custom-font u-text u-text-default u-text-font u-text-palette-3-base u-text-11">
                    TECHNICAL LEADER
                  </h5>
                  <p className="u-text u-text-grey-10 u-text-12">
                    "EL mejor equipo con el que trabajé en años.
                    
                    Los recomiendo,
                   
                    Todos tienen algo para aportar!
                    
                    ((HARDCODEADO))"
                  </p>
                  <div className="u-social-icons u-spacing-10 u-text-white u-social-icons-1">
                    <a className="u-social-url"  href="#">
                      <span className="u-icon u-icon-circle u-social-facebook u-social-type-color u-icon-1 ">
                        <svg
                          className="u-svg-link u-icon-1"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="#"
                            xlinkHref="#svg-b2c8"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="#"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content ico-face u-icon-1"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-b2c8"
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
                c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" href="#">
                      <span className="u-icon u-icon-circle u-social-twitter u-social-type-color u-icon-2 ico-twitter">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="#"
                            xlinkHref="#svg-01a1"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="#"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-01a1"
                        >
                          <circle
                            fill="currentColor"
                            className="st0"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
            c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
            c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
            c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
            c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="">
                      <span className="u-icon u-icon-circle u-social-instagram u-social-type-color u-icon-3 ico-instagram">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-3514"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-3514" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
            z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
            C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
            c5.5,0,9.9,4.5,9.9,9.9V73.3z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="#">
                      <span className="u-icon u-icon-circle u-social-linkedin u-social-type-color u-icon-4 ico-linkedin">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112" 
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-0522"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-0522" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
            C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
            H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <a className="u-social-url" target="_blank" href="#">
                      <span className="u-icon u-icon-circle u-social-google u-social-type-color u-icon-5 ico-google">
                        <svg
                          className="u-svg-link"
                          preserveAspectRatio="xMidYMin slice"
                          viewBox="0 0 112 112"
                        >
                          <use
                            xlinkHref="http://www.w3.org/1999/xlink"
                            xlinkHref="#svg-18cd"
                          ></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                          version="1.1"
                          xmlSpace="preserve"
                          className="u-svg-content"
                          viewBox="0 0 112 112"
                          x="0px"
                          y="0px"
                          id="svg-18cd" 
                        >
                          <circle
                            fill="currentColor"
                            cx="56.1"
                            cy="56.1"
                            r="55"
                          ></circle>
                          <path
                            fill="#FFFFFF"
                            d="M60.8,76.3c-6.6,8.6-19,11.1-29,7.7c-10.6-3.5-18.4-14.2-18.2-25.5C13,44.6,25.3,31.8,39.1,31.6
            c7.1-0.6,14,2.1,19.3,6.6c-2.2,2.4-4.4,4.8-6.9,7.1c-4.8-2.9-10.4-5-15.9-3.1c-8.8,2.6-14.3,13-10.9,21.8
            c2.7,9.1,13.7,14.1,22.5,10.2c4.5-1.6,7.5-5.7,8.7-10.2c-5.1-0.1-10.2,0-15.5-0.2c0-3,0-6.1,0-9.2c8.6,0,17.1,0,25.7,0
            C66.7,62.3,65.5,70.4,60.8,76.3z M98.3,62.5c-2.6,0-5.1,0-7.7,0c0,2.6,0,5.1,0,7.7c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7
            c-2.6,0-5.1,0-7.7,0c0-2.6,0-5.1,0-7.7c2.6,0,5.1,0,7.7,0c0-2.6,0-5.1,0.1-7.7c2.6,0,5.1,0,7.7,0c0,2.6,0,5.1,0,7.7
            c2.6,0,5.1,0,7.7,0C98.3,57.3,98.3,59.9,98.3,62.5z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <h2 className="u-align-center u-text u-text-13">equipo 007</h2>
        <p className="u-align-center u-text u-text-14">
          Con esfuerzo y perseverancia nada es imposible
        </p>
        
      </section>
    </div>
  );
};

export default Team;
