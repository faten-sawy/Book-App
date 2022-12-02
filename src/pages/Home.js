import axios from "axios"
import { useEffect,useState } from "react"

import { ReactComponent as Fav } from "../assets/Icons/heart-svgrepo-com (1).svg"
import BookCard from "../Components/BookCard"
const Home = ()=>{
    const [books,setBooks] = useState([])
    const [displayedBooks,setDisplayedBooks] = useState()
    const [paginationNumbers,setPaginationNumbers] = useState()
    const [flag,setFlag] = useState(false)
    
    useEffect(()=>{
        axios.get('https://example-data.draftbit.com/books').then(res=> {
            setBooks(res.data)
             
            /* Fill books will displayed with right number of books */
            const newArr =[]
            newArr.length = Math.round(res.data.length / 50) + 1;
            for(let i =1 ; i<= newArr.length ;i ++){
              newArr[i-1] = i
            }
       
   
            setPaginationNumbers(newArr)
            setDisplayedBooks(res.data.slice(0,50))
        })
    },[])

    const handlePagination = (currentPage = 1)=> {

      const lastPosition = currentPage * 50
      const firstPosition = lastPosition - 50

      const booksDisplayed = books.slice(firstPosition,lastPosition)
      setDisplayedBooks(booksDisplayed)

    }
    return (
      <div className="flex flex-wrap flex-col  min-[500px]:w-[80%] w-[90%] left-[5%] top-[120px] relative min-[500px]:left-[10%] max-[444px]:justify-center justify-between">
        <div className="flex flex-wrap w-full max-[444px]:justify-center justify-between">
          {displayedBooks?.map((item) => (
            <BookCard data={item} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center mt-8 mb-8">
          {paginationNumbers?.map((item) => (
            <button
              onClick={() => handlePagination(item)}
              className="w-[30px] h-[30px] bg-[#061148] rounded-lg mr-2 text-white"
            >
              {item}
            </button>
            
          ))}
        </div>
      </div>
    );

    
}
export default Home