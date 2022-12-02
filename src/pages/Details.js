import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { increment, decrement, reset } from '../Redux/actions/actions';
import { useDispatch, useSelector } from "react-redux";

import { connect } from "react-redux";

const BookDetails = ()=>{
    const {id} = useParams()
    const counter = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
    
    
    return(
        <>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>
            add

        </button>

        <p>{counter}</p>
        </>

    )
}

/* const mapStateToProps = (state) => {
    return {
       counter: state
    };
 };
 const mapDispatchToProps = () =>({
    increment, decrement, reset

 }) */

export default BookDetails