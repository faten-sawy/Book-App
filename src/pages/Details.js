import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import StarRatings from "react-star-ratings";
import axios from "axios";

const BookDetails = ()=>{
    const [book,setBook]=useState({})
    const [values,setValues] = useState({
      rating:0,
      reviews:0,
    })
    const [genres,setGenres] = useState([])
    let rating = null
    let reviews = null
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`https://example-data.draftbit.com/books/${id}`)
        .then((res)=>{
            setBook(res.data)
            setGenres(res.data.genres.split(','));
            numberWithCommas(res.data)
        });
    },[])
    function numberWithCommas(x) {
      console.log(x)
      rating = x.rating_count
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      reviews = x.review_count
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        setValues({rating:rating , reviews:reviews})
    }

    return (
      <div className="flex flex-col max-lg:justify-center lg:flex-row flex-wrap min-[500px]:w-[80%] w-[90%] left-[5%] relative top-[120px] min-[500px]:left-[10%] max-[444px]:justify-center justify-between">
        {book && (
          <>
            <div className="flex justify-center lg:w-[15%] max-lg:mb-4  w-[35%] max-lg:w-full">
              <img
                src={book.image_url}
                className="w-full max-lg:w-[300px] h-[300px] rounded-r-[25px] shadow-cardShadow mb-3"
                alt="Book cover"
              />
            </div>

            <div className="lg:w-[80%] w-[60%] max-lg:w-full">
              <h1 className="font-['Courgette'] text-5xl font-light">
                {book.title}
              </h1>
              <h2 className="text-[#848484] font-['Courgette'] text-xl mt-2 mb-6">
                {book.authors}
              </h2>
              <div className="flex items-center max-[597px]:flex-col max-[597px]:items-start">
                <div className="flex">
                  <StarRatings
                    rating={book.rating}
                    starDimension="25px"
                    starSpacing="3px"
                    starRatedColor="#ffb400"
                    starEmptyColor="#d3d3d3"
                  />
                  <p className="mx-2 text-4xl font-['Courgette'] ">
                    {book.rating}
                  </p>
                </div>

                <div className="flex">
                  <p className="text-[#848484] mx-2 text-[15px] font-['Courgette'] ">
                    {values.rating} ratings
                  </p>
                  <p className="text-[#848484] mx-2 text-[15px] font-['Courgette'] ">
                    {values.reviews} reviews
                  </p>
                </div>
              </div>
              <p className="mt-4 mb-3">{book.description}</p>
              <div className="flex">
                <p className="font-['Courgette'] text-xl mr-5">Genres</p>
                <div className="flex flex-wrap">
                  {genres.map((item) => (
                    <p className="pt-[2px] text-base mr-3 border-b-[2px] cursor-pointer font-semibold border-b-[#ffb400]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex mt-4 items-center">
                <p className="text-[#848484] mr-3">{book.num_pages} pages</p>
                <p className="text-[white] font-semibold bg-[#ffb400] p-2 rounded-md">
                  {book.format}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    );
}

export default BookDetails