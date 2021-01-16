import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import axios from 'axios'
import './CrudBeer.css'
import {useSelector, useDispatch} from 'react-redux'
import {getCategory} from '../../Redux/category'
import {getbeers} from '../../Redux/beer'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  root: {
    borderRadius:' 10px',
    color: 'white',
    backgroundColor: 'rgb(70 70 70)',
    
  }
});

const CrudBeer = () => {

  const dispatch = useDispatch()
  const categories = useSelector(store=> store.category.categories)
  const beer = useSelector(store => store.beer.beers)
   useEffect(()=>{
   dispatch(getCategory())
   dispatch(getbeers())
  },[beer])

   const [video, setVideo] = useState({
       id: "",
       name: "",
       description:"",
       price:"",
       stock:"",
       image:"",
   });

  const [categoria, setCategory] = useState([])
     
 const {name, description, price, stock, image} = video

   const handlePost= async()=>{
     const info = {
       name: video.name,
       description: video.description ,
       price: video.price,
       stock: video.stock,
       image: video.image,
     }

    //  console.log(video.id, categoria)
     const {data} = await axios.post('http://localhost:4000/products/create', info)
    //  console.log(data)
     {categoria.map(async(e)=>{
      // console.log(e.value) 
      // console.log(data.id)
       await axios.post(`http://localhost:4000/products/${data[0].id}/category/${e.value}`)
     })}
   alert('Producto creado')
   setVideo({
    id: "",
    name: "",
    description:"",
    price:"",
    stock:"",
    image:"",
   })
   }


   const handleSearch = async (product) => {
    setVideo(product)
    // setCategory(product.categories.name)
    // console.log(product.categories)
   };



const handleUpdate = async () => {
  if (!video.name || !video.description || !video.price || !video.stock || !video.image) {
      return alert("Debe completar todos los campos para agregar un producto");
      
  };
  
  const dataPost = {
      name: video.name,
      description: video.description,
      price: video.price,
      stock: video.stock,
      image: video.image
  };

   const {data} = axios.put(`http://localhost:4000/products/${video.id}`, dataPost)
   console.log(categoria)
   categoria.map(async(e)=>( 
    await axios.post(`http://localhost:4000/products/${video.id}/category/${e.value}`)
   ))
   alert('El producto fue modificado')
   setVideo({
    id: "",
    name: "",
    description:"",
    price:"",
    stock:"",
    image:"",
   })
};
 

const handleDelete = async () => {
  alert('Eliminado con exito')
  const {data} = await axios.delete(`http://localhost:4000/products/${video.id}`)
  setVideo({
    id: "",
    name: "",
    description:"",
    price:"",
    stock:"",
    image:"",
   })

};


   const handleSubmit =(e)=>{
     e.preventDefault()

  }

   const handleChange = e =>{
   setVideo({
      ...video,
      [e.target.name] : e.target.value
    })
  }


  const classes = useStyles();
    return(
      <div style={{backgroundColor: "rgb(108 117 125)", height: '2000px', marginTop: "-100px", width: '100%'}} >
      <div style={{display: "flex", marginLeft: "15px", marginTop: "100px", paddingTop: "100px"}} >
        <div className='formCrudProduct' >
        <form onSubmit={(e)=> handleSubmit(e)} >
          <h6>Nombre</h6>
          <input type='text'  value={name} onChange={handleChange} name='name' placeholder='Ingrese el nombre...'/>  
          <h6>Descripción</h6>
          <input type='text'  value={description} onChange={handleChange} name='description' placeholder='Ingrese una descripción...'/>  
          <h6>Precio</h6>
          <input  type='number'  value={price} onChange={handleChange} name='price' /> 
          <h6>Stock</h6>
          <input type='number'  value={stock} onChange={handleChange} name='stock' />  
          <h6>Imagen</h6>
          <input  type='text'  value={image} onChange={handleChange} name='image'  /> <br/><br/>
          <Select
          isMulti

          options={categories.map((e)=> ({
            label: e.name, value: e.id
          }))}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={setCategory}
          name= "category"
          />
          <div style={{display: "flex", justifyContent: 'space-between', marginTop: "10px" }} >
          <button type='submit' className='create'style={{width:"60px", height:"20px"}} onClick={()=> handlePost()} >Crear</button> 
          <button type='submit' className='update'style={{width:"60px", height:"20px"}} onClick={()=> handleUpdate()} >Actualizar</button>
          <button type='submit' className='delete'style={{width:"60px", height:"20px"}} onClick={()=> handleDelete()}>Borrar</button>
          </div>
        </form>
        </div>

        <div>
        <div className={classes.root}  style={{width: "200px", marginTop: "-80px"}} >
          <h3 className='h111'  style={{display: "flex", marginLeft: "20px"}} >Cervezas</h3>
            <List component="nav" aria-label="secondary mailbox folders" style={{height: "300px", overflow: "scroll"}} >
              {beer && beer.map(p => <ListItem button onClick={()=>handleSearch(p)} value={p.id} >
                <ListItemText primary={p.name} secondary={p.price}/>
              </ListItem>)}
            </List>
          </div>
        </div>


      </div>  
      </div>
    )
}

export default CrudBeer