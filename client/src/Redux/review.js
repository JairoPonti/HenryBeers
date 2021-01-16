import axios from 'axios'

//Estado inicial

const InicialState = {
    reviews: [], //conjunto de reviews de un producto 
}

//Constantes 

const GET_REVIEWS= 'GET_REVIEWS'

//Reducer

 export default function reviewReducer(state = InicialState, action){
  switch(action.type){
    case GET_REVIEWS: 
      return {...state, reviews: action.payload } //trae todas las review de un prod//

    default: return state  
  }
 }

//Action

export const getReviews = (id)=> async(dispatch)=>{

   try {
       const {data} = await axios.get(`http://localhost:4000/review/product/${id}`)//busca el producto
       dispatch({
           type: GET_REVIEWS,
           payload: data
       })
   } catch (error) {
       console.log(error)
   }
}
