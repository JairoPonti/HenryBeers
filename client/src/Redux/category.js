import axios from 'axios'

//Estado inicial

const InicialState = {
    categories: []
}

//Constantes 

const GET_CATEGORY = 'GET_CATEGORY'


//Reducer

 export default function categoryReducer(state = InicialState, action){
  switch(action.type){
      case GET_CATEGORY: 
        return {...state, categories: action.payload }
      default: return state  
  }
 }

//Action

export const getCategory = ()=> async(dispatch)=>{

   try {
       const {data} = await axios.get('http://localhost:4000/category')
       dispatch({
           type: GET_CATEGORY,
           payload: data
       })
   } catch (error) {
       console.log(error)
   }
}