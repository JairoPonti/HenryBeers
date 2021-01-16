import React, {useEffect} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useSelector, useDispatch} from 'react-redux'
import {getCategory} from '../../Redux/category'
import {Link} from 'react-router-dom'

export default function Category() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const dispatch = useDispatch()
  const category = useSelector(store => store.category.categories)

  useEffect(()=>{
     dispatch(getCategory())

  },[])


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <div >
      <List  >
      <ListItem  >
        <Link to='/catalogo' >Nuestras latas</Link>
        </ListItem>
        {category.map((text) => (
          <ListItem>
           <Link to={`/products/catalogo/${text.id}`} >
             <div className="category-box">{text.name}</div>
             </Link>
         
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['Cervezas'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} >{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}