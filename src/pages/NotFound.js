import NotFoundImg from "../assets/Images/undraw_page_not_found_re_e9o6.svg"

const NotFound = () =>{
    return(
       <div className="flex flex-col items-center justify-center h-[100vh]">
       <h2 className=" text-center text-4xl mb-10">Page Not Found</h2>
        <img src={NotFoundImg} alt="notFound" className="w-[50%] h-[50%] relative"/>
       </div>
    )
}
export default NotFound