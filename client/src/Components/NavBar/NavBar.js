import React, { useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Category from "../Categories/Categories";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"; // Importamos la SearchBar(cambiamos original de Material ui)
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import BuildIcon from "@material-ui/icons/Build";
import { getcarrito } from "../../Redux/Carrito";
import { logoutUser } from "../../Redux/user";
import { useSelector, useDispatch } from "react-redux";
import "./NavBar.css";

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
    borderRadius: theme.shape.borderRadius,
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
}));

export default function PrimarySearchAppBar({ setSearchApp }) {
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
        <h6 className="logueado">Logueado como {usuario.name}</h6>
      ) : null}
      {!usuario.isAdmin && usuario.id && (
        <Link to="/userActivity">
          {" "}
          <MenuItem onClick={handleMenuClose}>
            Actividad del Usuario
          </MenuItem>{" "}
        </Link>
      )}
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
  const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //      <MenuItem>
  //       <IconButton aria-label="show 11 new notifications" color="inherit">
  //         <Badge badgeContent={11} color="secondary">
  //           <AddShoppingCartIcon />
  //           <BuildIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Admin</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Login</p>
  //     </MenuItem>
  //   </Menu>
  // );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        {/* //cambia color de la navbar */}
        <Toolbar>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              fontFamily: "sans-serif",
              border: "0",
              fontSize: "5px",
            }}
          >
            <Category />
          </button>
          <SearchBar setSearchApp={setSearchApp} />
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNHmmYZlVXzUKTp_ZpULbph_mA-ew9jWaNcg&usqp=CAU"
              style={{
                backgroundColor: "gray",
                marginLeft: "600px",
                width: "150px",
                height: "100px",
              }}
            />
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
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
                  <AddShoppingCartIcon />
                </Badge>
              </Link>
            </IconButton>

            {/* LINK A ADMIN */}
            {usuario.isAdmin && (
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
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
      {renderMenu}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
    </div>
  );
}
