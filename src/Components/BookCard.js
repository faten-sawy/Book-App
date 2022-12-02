
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Fav } from "../assets/Icons/heart-svgrepo-com (1).svg"
import { useDispatch, useSelector } from "react-redux";

const BookCard = ({data}) => {
    const { image_url, id, title, authors } = data;
    const [flag,setFlag] = useState(false)
    const dispatch = useDispatch();
    const favList = useSelector((state) => state.favouritesList);
    
    const handle = (item) => {
      console.log(item);
      const flag = favList.find((data) => data.id === item.id);
      if (flag) {
        dispatch({ type: "DELETE_FROM_FAVOURITES", payload: item });
        console.log("deleted");
      } else {
        dispatch({ type: "ADD_TO_FAVOURITES", payload: item });
        console.log("added");
      }
    };

    return (
      <div
        className="flex flex-col w-[200px] relative mb-4 shadow-cardShadow rounded-xl"
        onMouseEnter={() => setFlag(true)}
        onMouseLeave={() => setFlag(false)}
      >
        <div className="relative">
          <Link to={`/book-details/${id}`}>
            <img
              src={image_url}
              alt="Book"
              className="w-full h-[200px] rounded-xl"
            />
          </Link>

          {flag && (
            <button
              onClick={() => handle(data)}
              className=" absolute rounded-l-[50px] right-0 top-2 w-[40px] h-[40px] bg-[#f0f0f0]"
            >
              
                <span className="hidden"></span>
                <Fav
                  width={20}
                  className="relative left-[20%]"
                  fill="#ef3f37"
                />
             
            </button>
          )}
        </div>
        <div className="p-3">
          <p className="font-['Courgette'] text-lg mt-3">{title}</p>
          <p className="text-[#848484] font-['Courgette']">{authors}</p>
        </div>
      </div>
    );
}

export default BookCard