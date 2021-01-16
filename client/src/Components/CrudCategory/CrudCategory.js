import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './CrudCategory.css'
import {useSelector, useDispatch} from 'react-redux'
import {getCategory} from '../../Redux/category'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  root: {
    borderRadius: '10px',
    color: 'white',
    backgroundColor: 'rgb(70 70 70)',
  }
});


const CrudCategory =()=>{

    const dispatch = useDispatch()
    const categoria = useSelector(store => store.category.categories)


    useEffect(()=>{
      dispatch(getCategory())
    },[categoria])

    const[category, setCategory] = useState({
        id: "",
        name: "",
        description: "",
        Imagen: ""
    });
    const classes = useStyles();
    const {name, description, Imagen} = category
    
    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleChange = e =>{
        setCategory({
            ...category,
            [e.target.name] : e.target.value
        })
    }

    const handleSearch = async(category) => {
         setCategory(category)

    }
    
    
    const addCategory = async() =>{
        const info = {
            name: category.name,
            description: category.description,
            image: category.Imagen
        }
           const {data} = await axios.post('http://localhost:4000/category/create', info)
          //  console.log(data)
           alert('Categoria creada!')
           setCategory({
            id: "",
            name: "",
            description: "",
            Imagen: ""
           })
       }

    const updateCategory = async() =>{
        const info = {
            name: category.name,
            description: category.description,
            image: category.Imagen
        }
           const {data} = await axios.put(`http://localhost:4000/category/update/${category.id}`, info)
          //  console.log(data)
           alert('Categoria Modificada!')
           setCategory({
            id: "",
            name: "",
            description: "",
            Imagen: ""
           })
       }
       

    const deleteCategory = async()=>{
     
        const {data} = await axios.delete(`http://localhost:4000/category/${category.id}`)
        alert('Categoria borrada!')
        setCategory({
          id: "",
          name: "",
          description: "",
          Imagen: ""
         })
    }   
        
    return(
      <div style={{marginTop: "100px"}}>
        <div  style={{display: "flex", color: "white", paddingTop: "100px"}} >
          <div className='formCrudCategory' style={{marginLeft: "200px", marginTop: "-90px"}} >
         <form onSubmit={(e) => handleSubmit(e) } style={{marginBottom: "10px", marginTop: "10px"}} >
             <h6>Name</h6>
          <input type='text'   value={name} onChange={handleChange}  name='name'  /> 
             <h6>Description</h6>
          <input type='text'   value={description}  onChange={handleChange}  name='description'/>
          <h6>Imagen</h6>
          <input type='text'   value={Imagen}  onChange={handleChange}  name='Imagen'/><br/><br/>
          <button type='submit' className='create' style={{width:"60px", height:"20px"}} onClick={()=> addCategory()}  >Crear </button>   
          <button type='submit' className='update' style={{width:"60px", height:"20px"}} onClick={()=> updateCategory()}  >Actualizar </button>
          <button type='submit' className='delete' style={{width:"60px", height:"20px"}} onClick={()=> deleteCategory()}  >Borrar </button>   
        </form>   
        </div>
        <div>
        <div className = "divcategories"  style={{width: "300px", marginTop: "-100px"}} >

            <div className={classes.root}>
            <h3 style={{marginLeft: "10px"}} >Categorías</h3>
              <List component="nav" aria-label="secondary mailbox folders" style={{height: "300px", overflow: "scroll"}} >
                {categoria && categoria.map(c => <ListItem button onClick={() => handleSearch(c)} value={c.id} >
                  <ListItemText primary={c.name}/>
                </ListItem>)}
              </List>
            </div>
          </div>
        </div>
        </div>
        </div>
    )
     

}

export default CrudCategory