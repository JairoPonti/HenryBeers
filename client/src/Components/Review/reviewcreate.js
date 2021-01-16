import React, {useState} from 'react'
import Rating from '@material-ui/lab/Rating';
import axios from "axios";

const ReviewCreate = ({productId, userId}) => {


    const [review, setReview] = useState({
        calification: parseInt(null),
        commentary: ""  
    });

    const {calification , commentary} = review

    const onChange = (e) => {
     setReview({
         ...review,
         [e.target.name]: e.target.value
     }) 
    } 

    const ReviewPost = async() =>{
        const info = {
            commentary: review.commentary,
            calification: review.calification
        }
     const {data} = await axios.post(`http://localhost:4000/review/product/${productId}/user/${userId}`, info)
     alert('Se agrego un comentario...')
    }


    const handleSubmit = (e) => {
       e.preventDefault()
    }


    return(
        <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
        
          <div className='stars' style={{marginLeft: "50px", marginTop: "10px"}} >
                    <Rating name="calification" name='calification' value={calification} size="large" onChange={(e)=> onChange(e)} />
         </div>
         <div>
             <input style={{marginLeft: "20px", marginTop: "10px"}} type='text' value={commentary} name='commentary' onChange={(e)=> onChange(e)} />
         </div>
         <button style={{marginLeft: "50px", marginTop: "10px", border: "0", backgroundColor: "black", color: "white", heigth: "20px", borderRadius: "10px"  }} type='submit' onClick={()=>ReviewPost()}>Enviar Comentario</button>
        </form>
        </div>
    )
} 

export default ReviewCreate

