import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import logo from "../src/assets/rvlogo.png";
import "./header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export default function Header() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <div className="m-8 ">
      <header className="flex justify-evenly bg-[#97cadb4c] py-6 px-20 rounded-full backdrop-filter backdrop-blur-lg blurBack font-[Poppins]">
        <div className="flex items-center justify-center md:gap-2">
          <img src={logo} className="md:w-12 w-8" alt="" />
          <Link
            to="/"
            className="md:text-2xl text-gray-300 hover:text-[#ffffff] transition-all hover:delay-100 font-bold"
          >
            RV Institute
          </Link>
        </div>
        <nav
          className="flex justify-between gap-4 items-center font-medium z-10"
          ref={navRef}
        >
          <a
            href="#about"
            className="text-xl text-gray-200 hover:text-[#ffffff] transition-all hover:delay-100"
          >
            About
          </a>
          <Link
            to="/blog"
            className="text-xl text-gray-200 hover:text-[#ffffff] transition-all hover:delay-100"
          >
            Blog
          </Link>
          <a
            href="tel:+919205136229"
            className="text-xl text-gray-200 hover:text-[#ffffff] transition-all hover:delay-100"
          >
            Contact
          </a>
          <a
            href="#team"
            className="text-xl text-gray-200 hover:text-[#ffffff] transition-all hover:delay-100"
          >
            Team
          </a>
          <button onClick={showNavBar} className="nav-btn nav-close-btn">
            {" "}
            <FaTimes />{" "}
          </button>

          {username && (
            <>
              <Link to="/create">Create New Post</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          )}
          {!username && (
            <>
              <Link
                className="bg-[#d7d7d7ec] hover:bg-[#ffffffe9] px-6 py-2 rounded-full transition-all hover:delay-100"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="bg-[#d0d0d0ec] hover:bg-[#ffffffe9] px-6 py-2 rounded-full transition-all hover:delay-100"
                to="/register"
              >
                Register
              </Link>
            </>
          )}
        </nav>

        <button onClick={showNavBar} className="nav-btn">
          <FaBars />
        </button>
      </header>
    </div>
  );
}
