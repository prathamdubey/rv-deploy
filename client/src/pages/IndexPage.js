import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/rvlogo.png";
import Post from "../post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response =>{
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div className="m-8">
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
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </div>
  );
}
