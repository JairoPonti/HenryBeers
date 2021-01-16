import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getcarrito } from "../Redux/Carrito";
import { logoutUser } from "../Redux/user";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../Components/SearchBar/SearchBar";
import "./Home.css";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { fade, makeStyles } from "@material-ui/core/styles";
import BuildIcon from "@material-ui/icons/Build";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  icon: {
    color: "black",
  },
}));

export default function Home(  ) {

  const usuario = useSelector((store) => store.user.user);
  const carrito = useSelector((store) => store.carrito.carrito);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(usuario.id);
    // console.log(usuario);
    dispatch(getcarrito(1));
    // const fetchData =async()=>{
    //   await axios.post(`http://localhost:4000/users/1/carrito`)
    // }
    // fetchData()
  }, [usuario]);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <Link to='/admin' > <MenuItem onClick={handleMenuClose}>Admin</MenuItem> </Link> */}
      {/* crear funcion op.ternario para rol admin = true --> show admin features */}
      {!usuario.id && (
        <Link to="/login">
          {" "}
          <MenuItem onClick={handleMenuClose}>Iniciá Sesión</MenuItem>{" "}
        </Link>
      )}
      {!usuario.id && (
        <Link to="/NuevaCuenta">
          {" "}
          <MenuItem onClick={handleMenuClose}>Registrate</MenuItem>{" "}
        </Link>
      )}
      {usuario.id ? (
        <div>
          <h6 className="logueado">Hola {usuario.name}</h6>
        </div>
      ) : null}
      

      {usuario.isAdmin && (
        <Link to="/admin" >
          {" "}
          <MenuItem onClick={handleMenuClose}>
            Panel Admin
          </MenuItem>{" "}
        </Link>
      )}
      {/* {usuario.user && (
        <Link to="/userActivity">
          {" "}
          <MenuItem onClick={handleMenuClose}>
            Actividad del Usuario
          </MenuItem>{" "}
        </Link>
      )} */}
      {!usuario.isAdmin&& usuario.id ? (
        <Link to="/userActivity">
          {" "}
          <MenuItem onClick={handleMenuClose}>
            Actividad del Usuario
          </MenuItem>{" "}
        </Link>
      ):null}
      {usuario.id && (
        <Link to="/">
          {" "}
          <MenuItem onClick={() => dispatch(logoutUser())}>
            Cerrar Sesión
          </MenuItem>{" "}
        </Link>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar  >
        <Toolbar>
          <header id="home" className="header">
            <nav className="navbar fixed-top navbar-light bg-light">
              <div className="nav-center container">
                <Link to="/" className="logo">
                  <h1>
                    HENRY <span>BEERS</span>
                  </h1>
                </Link>

                <div className="nav-menu">
                  <div className="nav-top">
                    <div className="logo">
                      <h1>
                        HENRY<span>BEERS</span>
                      </h1>
                    </div>
                    <div className="close">
                      <i className="fas fa-times"></i>
                    </div>
                  </div>
                  <ul className="nav-list">
                    <li className="nav-item">
                      <Link to='/' >
                      <a className="nav-link scroll-link">
                        Inicio
                      </a></Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/catalogo">
                        <a /* href="#shop" */ className="nav-link scroll-link">
                          Cervezas
                        </a>
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link to="/catalogo" className="nav-link scroll-link">
                        Hot
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <a href="/nosotros" className="nav-link scroll-link">
                        Nosotros
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <div className="iconitos"> */}
                {/* <div className={classes.grow} /> */}
                <Box display="flex" justifyContent="flex-end">
                  {/* hacer menu desplegable para login y registrarse menu dropdown*/}

                  {/* LINK A ADMIN */}
                  {/* {usuario.isAdmin && (
                      <Link to="/admin">
                        <IconButton aria-label="admin" color="inherit">
                          <Badge color="secondary">
                            <BuildIcon />
                          </Badge>
                        </IconButton>
                      </Link>
                    )}
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                    >
                      <AccountCircle
                        fontSize="large"
                        className={classes.icon}
                      />
                    </IconButton> */}

                  {usuario.isAdmin && usuario.isAdmin ? (
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                    >
  
                        <BuildIcon fontSize="large" className={classes.icon} />
                      
                    </IconButton>
                  ) : (
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                    >
                      <AccountCircle
                        fontSize="large"
                        className={classes.icon}
                      />
                    </IconButton>
                  )}

                  {/* ver el carrito */}
                  <IconButton aria-label="carrito" color="inherit">
                    <Link to="/carrito">
                      {" "}
                      <Badge
                        badgeContent={
                          carrito.products &&
                          carrito.products[0] &&
                          carrito.products.length
                        }
                        color="secondary"
                      >
                        <AddShoppingCartIcon
                          fontSize="large"
                          className={classes.icon}
                        />
                      </Badge>
                    </Link>
                  </IconButton>
                  <div>
                  <SearchBar  />
                  </div>
                  <div className="hamburger">
                    <i className="fas fa-bars"></i>
                  </div>
                </Box>
              </div>
              {/* </div> */}
            </nav>
          </header>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
