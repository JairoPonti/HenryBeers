import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getcerveza} from '../../Redux/beer'
import './Product.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReviewCreate from '../Review/reviewcreate'
import ReviewView from '../Review/ListRev'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Product = (data) => {
 
  const dispatch = useDispatch()
  const beer = useSelector(store => store.beer.beer)
  // console.log(userId)
  // console.log(data.user)

  useEffect(()=>{
    dispatch(getcerveza(data.product[0] && data.product[0].id))
  },[])
  /* console.log(beer)
  console.log(beer.name) */
  const classes = useStyles();
    return (
      <div >
        <div style={{marginTop: "120px",display: "flex",  flexDirection: "row"}} >
          <div className="card text-center" style={{backgroundColor: "whiteSmoke", color: "black", marginLeft: "200px", width: "500px"}} >
          <a href="javascript:history.back(1)" className='btn1' style={{marginTop: "10px"}} >
             <div  >
             <Button variant="contained" color="secondary"  >
              X
            </Button>
            </div></a>
            <h2 className="card-title">{data.product[0] && data.product[0].name}</h2><hr/>
                    <div class="card-body">
                      <div>
                    <img src={data.product[0] && data.product[0].image} style={{width: "150px"}} />
                    </div><br/>
                <p className="card-text">{data.product[0] && data.product[0].description}</p>
              </div><hr/>
              <div>
                   <h5>${data.product[0] && data.product[0].price}</h5>
              </div> 
                  <div className="card-footer text-muted"   >
                         <h5 style={{color: "black"}} >Stock:{data.product[0] && data.product[0].stock}</h5> 
               </div>
           
          </div>  
          <div style={{ width: "250px", height: "150px", backgroundColor: "white", marginLeft: "100px", borderRadius: "10px", color: "black"}} >
          <ReviewCreate productId={beer.id} userId={data.user} />
          </div>
          <div>
          <ReviewView  productId={data.product[0] && data.product[0].id}  />
          </div>
          </div>
          
          </div>
    );
}

export default Product