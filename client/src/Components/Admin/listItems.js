import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Icon, InlineIcon } from "@iconify/react";
import beerIcon from "@iconify/icons-mdi/beer";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Link } from "react-router-dom";


export const mainListItems = (
  <div>
    <Link to="/admin">
      <ListItem button>
       {/*  <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon> */}
        {/* <ListItemText primary="Panel" /> */}
      </ListItem>
    </Link>
    <Link to="/admin/ordenes">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Ordenes" />
      </ListItem>
    </Link>
    <Link to="/admin/users">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItem>
    </Link>
    <Link to="/admin/crud/products">
      <ListItem button>
        <ListItemIcon>
          <Icon icon={beerIcon} />
        </ListItemIcon>
        <ListItemText primary="Productos" />
      </ListItem>
    </Link>
    <Link to="/admin/categories">
      <ListItem button>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Categorias" />
      </ListItem>
    </Link>
    <a href="/">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Salir" />
      </ListItem>
    </a>
  </div>
);


