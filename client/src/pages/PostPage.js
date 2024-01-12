import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/rvlogo.png";
import { format } from "date-fns";
import { UserContext } from "../UserContext";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";
  return (
    <div className="flex flex-col gap-8 justify-center xl:mx-20 pt-10 pb-40 ">
      <div className="flex justify-evenly bg-[#97cadb4c] py-6 px-20 rounded-full backdrop-filter backdrop-blur-lg blurBack font-[Poppins]">
        <div className="flex items-center justify-center gap-2">
        <img src={logo} className="w-12" alt="" />
          <Link
            to="/"
            className="text-2xl text-gray-300 hover:text-[#ffffff] transition-all hover:delay-100 font-bold"
          >
            RV Institute
          </Link>
        </div>
        
      </div>
      <div className="flex justify-center items-center">
        <div className="flex lg:flex-row flex-col md:gap-10 justify-center items-center">
        
          <div className="flex items-center justify-center bg-gray-800 lg:w-[40%] h-[450px] rounded-3xl overflow-hidden z-10">
            <img
              className="w-[100%] h-[100%] object-cover "
              src={`http://localhost:4000/${postInfo.cover}`}
              alt=""
            />
          </div>
          <div className="bg-[#ffffff65] px-40 py-10 rounded-3xl lg:translate-x-[-110px] z-1 lg:w-[50%]">
            <h1 className="lg:text-8xl text-4xl lg:text-left text-center font-bold font-[Poppins] text-gray-200">{postInfo.title}</h1>
            <div className="text-right text-gray-200 capitalize font-semibold"> by {postInfo.author.username}  </div>
            <div className="text-right text-gray-600 font-semibold" >{format(new Date(postInfo.createdAt), "MMM d, yyyy HH:mm")}</div>
            {userInfo.id === postInfo.author._id && (
          <>
            <div className="float-right bg-white hover:bg-gray-300 md:px-4 py-2 mt-2 rounded-full">
              <Link to={`/edit/${postInfo._id}`}>Edit This Post</Link>
            </div>
          </>
        )}
          </div>
        
        </div>
      </div>

      
      
      
      <div className="md:mx-20 m-0 my-5 font-sans text-justify leading-1 text-gray-200 lg:text-xl md:text-2xl font-light bg-slate-700 rounded-xl p-10" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
}
