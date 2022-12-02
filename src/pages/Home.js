import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"

const Home = ()=>{
    const [books,setBooks] = useState([])
    const dispatch = useDispatch()
    const favList = useSelector((state)=>state.favouritesList)

    const handle = (item)=>{
        console.log(item)
        const flag = favList.find((data)=>data.id === item.id)
        if(flag){
            dispatch({type:'DELETE_FROM_FAVOURITES',payload:item})
            console.log("deleted")  
        }
        else {
            dispatch({type:'ADD_TO_FAVOURITES',payload:item})
            console.log("added")
        }
    }

    useEffect(()=>{
        axios.get('https://example-data.draftbit.com/books').then(res=> {
            setBooks(res.data.splice(0,50)) 
        })
    },[])
    return (
        <div className="flex flex-wrap">
            {books?.map((item)=>(
                <div className="flex flex-col">
                    <img src={item.image_url} alt="Book Image" className="w-[200px] h-[200px]"/>
                    <p>{item.title}</p>
                    <p>{item.authors}</p> 
                    <button onClick={()=>handle(item)}>
                        <Link to={`/book-details/${item.id}`} >Click To Fav</Link>
                    </button>
                </div>
            ))}
        </div>

    )

    
}
export default Home