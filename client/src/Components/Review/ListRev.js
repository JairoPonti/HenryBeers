import React, {useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews  } from '../../Redux/review';
import axios from 'axios'



//Muestra todas las review de un producto
export default function ReviewView({productId}){
  const dispatch = useDispatch();
  const reviews = useSelector(store => store.review.reviews);
    // console.log(reviews[0] && reviews.users && reviews[0].users);
    // console.log(reviews)
useEffect(()=>{
    // console.log(productId)
  dispatch(getReviews(productId))
}, [reviews] )

    return ( 
    <div style={{marginLeft: "100px", width: "300px", height: "500px" , backgroundColor: "white", borderRadius: "10px",  overflow: "scroll"}} >
        <h3 style={{marginLeft: "70px"}} >Comentarios</h3>
        { reviews[0] && reviews[0].users && reviews[0].users.map((rev)=>(
        <div key={rev.id}> 
        <Box component="fieldset" mb={3} borderColor="transparent"> 
        <Typography component="legend">Calificación del Producto</Typography>
        <Rating
          name="simple-controlled"
          value={ rev.review.calification }
        />
        <Typography component='h2'>Fecha de creación: {rev.review.createdAt.slice(0,10) } </Typography>
        <Typography component='h2'>Mail: {rev.email } </Typography>
        <Typography component='h2'>Descripción o comentario: {rev.review.commentary} </Typography>
        </Box>       
        </div> ))}
        </div>
    );
};

