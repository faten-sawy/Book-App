
import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import BookCard from "../Components/BookCard"
const Favourites =()=>{
    const favList = useSelector((state)=>state.favouritesList)
    const [authors,setAuthors] = useState([]) 
    const [displayedFav,setDisplayedFav] = useState(favList) 
    const dispatch = useDispatch()  
     
    useEffect(
      (item) => {
        const authorsArr = [];
        favList.map((item) => {
          authorsArr.push(item.authors);
        });
        const uniq = [...new Set(authorsArr)];
        setAuthors(uniq);
        setDisplayedFav(favList)
        console.log(uniq);
      },
      [favList]
    );
    const handleFilter = (author)=> {

    const filteredFav = favList.filter((item)=>item.authors === author)
    setDisplayedFav(filteredFav)

    }
    const handleDisplayAll = ()=>{
      setDisplayedFav(favList)
    }
    return (
      <div className="flex flex-wrap flex-col min-[500px]:w-[80%] w-[90%] left-[5%] top-[120px] relative min-[500px]:left-[10%] max-[444px]:justify-center justify-between">
        <div className="flex justify-between flex-wrap shadow-cardShadow min-h-[40px] items-center p-3">
          <p className="font-['Courgette'] mb-3">
            Categorized by author
          </p>
          <div className="flex flex-wrap">
            <h3
              onClick={handleDisplayAll}
              className="mr-1 after:content-[''] after:px-1 after:border-r-2 cursor-pointer after:border-[#ffb400] font-['Courgette']"
            >
              All
            </h3>
            {authors?.map((item) => (
              <div key={item} className="mr-1">
                <h3
                  onClick={() => handleFilter(item)}
                  className="after:content-[''] after:px-1 after:border-r-2 cursor-pointer after:border-[#ffb400] font-['Courgette']"
                >
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex justify-center mt-8 flex-wrap">
          {displayedFav.map((item) => (
            <div key={item.id} className="mr-6">
              <BookCard data={item} />
            </div>
          ))}
        </div>
      </div>
    );
}

export default Favourites