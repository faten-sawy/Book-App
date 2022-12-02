
import { useSelector } from "react-redux"
const Favourites =()=>{
    const favList = useSelector((state)=>state.favouritesList)
    console.log(favList)
    return(
        <div>
            <p>Favourites</p>
            {favList.map((item)=>(
                <p>{item.id}</p>
            ))}
        </div>
       
    )
}

export default Favourites