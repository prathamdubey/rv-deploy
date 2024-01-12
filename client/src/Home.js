import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg from "./assets/sliderimage.webp";
import torchsvg from "./assets/torchsvg.svg";
import layerDivide from "./assets/wavediff.svg";
import quotes from "./assets/quotes.svg";
import albert from "./assets/homepage/changed/1.png";
import bill from "./assets/homepage/changed/2.png";
import maths from "./assets/homepage/changed/3.png";
import meet1 from "./assets/homepage/meet1.jpg";
import meet2 from "./assets/homepage/meet2.jpg";
import meet3 from "./assets/homepage/meet3.jpg";
import director from "./assets/homepage/director-removebg-preview.png";
import director2 from "./assets/homepage/director.jpg";
import rev1 from "./assets/reviews/rev1.JPG";
import rev2 from "./assets/reviews/rev2.jpg";
import rev3 from "./assets/reviews/rev3.jpg";
import rev4 from "./assets/reviews/rev4.jpg";
import img1 from "./assets/gsllery/img1.JPG";
import img2 from "./assets/gsllery/img2.JPG";
import img3 from "./assets/gsllery/img3.JPG";
import img4 from "./assets/gsllery/img4.JPG";
import img5 from "./assets/gsllery/img5.png";
import img6 from "./assets/gsllery/img6.jpg";
import briefcase from "./assets/homepage/briefcase.svg";
import book from "./assets/homepage/book.svg";
import calc from "./assets/homepage/calculator.svg";
import card from "./assets/homepage/card.svg";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Footer from "./Footer";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <main className="">
      <a
        href="https://api.whatsapp.com/send?phone=919205136229"
        className="float"
        target="_blank"
      >
        <i className="flex items-center justify-center my-float">
          <FaWhatsapp />
        </i>
      </a>
      <div className="text-white w-auto ">
        <section className="pos">
          <div className="md:mx-20 mx-6 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
            <Slider {...settings} className="-z-10">
              <div className="bg-gray-800 w-[100%] rounded-3xl overflow-hidden shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                <img
                  className="w-[100%] cover-full rounded-3xl"
                  src={albert}
                  alt=""
                />
              </div>
              <div className="bg-gray-800 w-[100%] rounded-3xl overflow-hidden shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                <img
                  className="w-[100%] cover-full rounded-3xl"
                  src={bill}
                  alt=""
                />
              </div>
              <div className="bg-gray-800 w-[100%] rounded-3xl overflow-hidden shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                <img
                  className="w-[100%] cover-full rounded-3xl"
                  src={maths}
                  alt=""
                />
              </div>
            </Slider>
          </div>
          <div className="flex justify-center my-20 spiral">
            <div className="flex lg:gap-40 md:m-20 m-10  md:p-20 px-4 justify-center items-center w-[80%] md:h-[500px] h-[400px] bg-transparent shadow-[rgba(0,_0,_0,_1)_0px_25px_50px_5px] ">
              <div className="flex flex-col justify-evenly lg:w-[40%] md:w-[60%] w-[100%] text-gray-800">
                <h1 className=" xl:text-6xl lg:text-4xl md:text-[40px] text-[30px] font-bold ">
                  Vision?
                </h1>
                <p className=" xl:text-xl lg:text-md md:text-sm text-[14px] font-medium text-black">
                  Providing support to a student from the early stages
                  contributes significantly to shaping a successful career. We
                  strongly embrace this theory and are dedicatedly committed to
                  its realization through our efforts. Establishing a strong
                  foundation for a child to pave the way for future success in
                  prestigious institutions like IITs, IIMs, NEET, and Civil
                  Services Examinations.
                </p>
              </div>
              <div className="xl:w-[40%] lg:w-[40%] md:w-[40%] w-[0%]  ">
                <img className="" src={torchsvg} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white h-auto">
          <div className="w-[100%] xl:-translate-y-4 lg:-translate-y-16">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#001b4b"
                fill-opacity="1"
                d="M0,192L48,208C96,224,192,256,288,229.3C384,203,480,117,576,96C672,75,768,117,864,154.7C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col gap-20 justify-center items-center lg:-translate-y-40">
            <h1 className="text-gray-700 font-extrabold xl:text-6xl lg:text-4xl md:text-4xl text-2xl">
              Why Choose Us?
            </h1>
            <div className="grid md:grid-cols-2 place-items-center  gap-y-20 w-[100%] mb-20">
              <div className="rounded-2xl flex items-center justify-evenly gap-6 w-[80%] h-48 bg-transparent shadow-[rgba(0,_0,_0,_0.5)_0px_0px_20px_5px]  ">
                <div className="flex justify-center items-center w-20 h-20 bg-blue-500 rounded-full">
                  <img className="w-10" src={book} alt="" />
                </div>
                <div className="w-[50%] flex flex-col justify-evenly">
                  {" "}
                  <h1 className="text-gray-800 lg:text-xl md:text-[14px] text-[16px] font-bold">
                    TESTS AND ASSIGNMENTS{" "}
                  </h1>{" "}
                  <p className="text-gray-600 xl:text-md lg:text-sm md:text-sm text-[13px] font-medium">
                    In addition to having a personalized study material, we will
                    have assignments assigned after every class and tests after
                    every chapter.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl  flex items-center justify-evenly gap-6 w-[80%] h-48 bg-transparent shadow-[rgba(0,_0,_0,_0.5)_0px_0px_20px_5px]  ">
                <div className="flex justify-center items-center w-20 h-20 bg-blue-500 rounded-full">
                  <img className="w-10" src={calc} alt="" />
                </div>
                <div className="w-[50%] flex flex-col justify-evenly">
                  {" "}
                  <h1 className="text-gray-800 lg:text-xl md:text-[14px] text-[16px] font-bold">
                    QUESTION BANK{" "}
                  </h1>{" "}
                  <p className="text-gray-600 xl:text-md lg:text-sm md:text-[14px] text-[13px] font-medium">
                    A question bank comprising around 200 to 300 questions for
                    each chapter, along with mock test papers, curated to
                    provide an excellent learning experience.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl  flex items-center justify-evenly gap-6 w-[80%] h-48 bg-transparent shadow-[rgba(0,_0,_0,_0.5)_0px_0px_20px_5px]  ">
                <div className="flex justify-center items-center w-20 h-20 bg-blue-500 rounded-full">
                  <img className="w-10" src={briefcase} alt="" />
                </div>
                <div className="w-[50%] flex flex-col justify-evenly">
                  {" "}
                  <h1 className="text-gray-800 lg:text-xl md:text-[14px] text-[16px] font-bold">
                    5 CLASSES PER WEEK{" "}
                  </h1>{" "}
                  <p className="text-gray-600 xl:text-md lg:text-sm md:text-sm text-[13px] font-medium">
                    Five live classes for each subject per week, in a friendly
                    environment with quality teachers and proper interaction
                    among teachers and students.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl  flex items-center justify-evenly gap-6 w-[80%] h-48 bg-transparent shadow-[rgba(0,_0,_0,_0.5)_0px_0px_20px_5px]  ">
                <div className="flex justify-center items-center w-20 h-20 bg-blue-500 rounded-full">
                  <img className="w-14" src={card} alt="" />
                </div>
                <div className="w-[50%] flex flex-col justify-evenly">
                  {" "}
                  <h1 className="text-gray-800 lg:text-xl md:text-[14px] text-[16px] font-bold">
                    MONTHLY REPORTS{" "}
                  </h1>{" "}
                  <p className="text-gray-600 xl:text-md lg:text-sm md:text-sm text-[13px] font-medium">
                    Our WhatsApp groups will allow parents to stay on top of
                    regular activities of their ward through the monthly report
                    listing assignments, tests and attendance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" flex flex-col p-44 items-center w-[100%] gap-14 parallex">
          <h1 className="text-6xl font-extrabold text-gray-200">
            CHOOSE THE PERFECT PLAN
          </h1>
          <div className="flex md:flex-row md:flex-wrap flex-col justify-center gap-20">
            <div className="w-[400px] h-[600px] bg-[#001b4b] rounded-3xl flex flex-col items-center justify-between py-14 shadow-[0_20px_50px_rgba(255,_255,_255,_0.7)]">
              <h1 className="text-6xl font-bold text-white">Class 1-5</h1>
              <h1 className="">CBSE</h1>
              <h1 className="font-extrabold">___________</h1>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#fff"
                  >
                    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                  </svg>
                  All Subject
                </div>
                <div className="flex gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#fff"
                  >
                    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                  </svg>
                  Test Series
                </div>
                <div className="flex gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#fff"
                  >
                    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                  </svg>
                  Study Material
                </div>
                <div className="flex gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#fff"
                  >
                    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                  </svg>
                  Question Bank
                </div>
                <div className="flex gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#fff"
                  >
                    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                  </svg>
                  Monthly Report
                </div>
              </div>
              <button className="px-10 py-4 bg-white text-[#001b4b] rounded-full text-xl font-bold">
                <a href="tel:+919205136229">Contact Us</a>
              </button>
            </div>
            <div className="w-[400px] h-[600px] bg-[#fff] rounded-3xl flex flex-col items-center justify-between py-14 shadow-[0_20px_50px_rgba(255,_255,_255,_0.7)]">
              <h1 className="text-6xl font-bold text-gray-600">Class 6-10</h1>
              <h1 className="text-gray-600">CBSE</h1>
              <h1 className="font-extrabold text-gray-600">___________</h1>
              <div className="flex flex-col gap-4 pt-4 text-gray-600">
                <div className="flex gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#4B5563"
                  >
                    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                  </svg>
                  Maths & Science
                </div>
                <div className="flex gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#4B5563"
                  >
                    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                  </svg>
                  Test Series
                </div>
                <div className="flex gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#4B5563"
                  >
                    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                  </svg>
                  Study Material
                </div>
                <div className="flex gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#4B5563"
                  >
                    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                  </svg>
                  Question Bank
                </div>
                <div className="flex gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="#4B5563"
                  >
                    <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
                  </svg>
                  Monthly Report
                </div>
              </div>
              <button className="px-10 py-4 bg-[#001b4b] text-white rounded-full text-xl font-bold">
              <a href="tel:+919205136229">Contact Us</a>
              </button>
            </div>
          </div>
        </section>
        <section className="md:p-44 py-20" id="team">
          <h1 className="md:text-6xl text-2xl font-extrabold text-center">
            MEET THE TEAM BEHIND OUR SUCCESS
          </h1>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 place-items-center 2xl:gap-x-40 xl:gap-x-0 lg:gap-x-40 gap-y-14 pt-20">
            <div className="flex flex-col gap-4 py-8 justify-between w-[400px] h-[600px] bg-[#fff] rounded-xl ">
              <div className="h-[90%]  overflow-hidden ">
                <img className="-translate-y-32" src={director} alt="" />
              </div>
              <div className=" ">
                <h1 className="text-center text-2xl text-gray-800 font-bold pb-2">
                  Pragnya Jain (Sonia)
                </h1>
                <p className="text-center text-gray-800 font-medium">
                  Director
                </p>
              </div>
              <div className="flex pb-4 w-[100%] justify-center gap-10">
                {" "}
                <i className="text-2xl flex justify-center items-center w-10 h-10 bg-[#25d366] rounded-full cursor-pointer">
                  <a href="https://api.whatsapp.com/send?phone=919205136229">
                    <FaWhatsapp />
                  </a>
                </i>
                <i className="text-2xl flex justify-center items-center w-10 h-10 bg-[#E4405F] rounded-full cursor-pointer">
                  <a href="https://www.instagram.com/r.v.institute?igsh=MWZoeHdwdTBkcHFmMw==">
                    <FaInstagram />
                  </a>
                </i>
                <i className="text-2xl flex justify-center items-center w-10 h-10 bg-[#0077B5] rounded-full cursor-pointer">
                  <a href="https://www.facebook.com/instituterv">
                    <FaFacebook />
                  </a>
                </i>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-8 justify-between w-[400px] h-[600px] bg-white rounded-xl ">
              <div className="h-[90%]  overflow-hidden ">
                <img src={meet2} alt="" />
              </div>
              <div className=" ">
                <h1 className="text-center text-2xl text-gray-800 font-bold pb-2">
                  Rhythm Jain
                </h1>
                <p className="text-center text-gray-800 font-medium">Faculty</p>
              </div>
              <div className="flex pb-4 w-[100%] justify-center gap-10">
                {" "}
                <i className="text-2xl flex justify-center items-center w-10 h-10 bg-[#25d366] rounded-full cursor-pointer">
                  <a href="https://api.whatsapp.com/send?phone=919871411229">
                    <FaWhatsapp />
                  </a>
                </i>
                <i className="text-2xl flex justify-center items-center w-10 h-10 bg-[#E4405F] rounded-full cursor-pointer">
                  <a href="https://www.instagram.com/rhythm_jain03?igsh=MTJ2aHpweTQzb3V3cQ==">
                    <FaInstagram />
                  </a>
                </i>
                <i className="text-2xl flex justify-center items-center w-10 h-10 bg-[#0077B5] rounded-full cursor-pointer">
                  <a href="  https://www.linkedin.com/in/rhythm-jain-b26335288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <FaLinkedin />
                  </a>
                </i>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-8 justify-between w-[400px] h-[600px] bg-white rounded-xl ">
              <div className="h-[90%]  overflow-hidden ">
                <img src={meet1} alt="" />
              </div>
              <div className=" ">
                <h1 className="text-center text-2xl text-gray-800 font-bold pb-2">
                  Saiyam Jain
                </h1>
                <p className="text-center text-gray-800 font-medium">Faculty</p>
              </div>
              <div className="flex pb-4 w-[100%] justify-center gap-10">
                {" "}
                <i className="text-2xl flex justify-center items-center w-10 h-10 bg-[#25d366] rounded-full cursor-pointer">
                  <a href="https://api.whatsapp.com/send?phone=919810798930">
                    <FaWhatsapp />
                  </a>
                </i>
                <i className="text-2xl flex justify-center items-center w-10 h-10 bg-[#E4405F] rounded-full cursor-pointer">
                  <a href="https://www.instagram.com/saiyamjain1805?igsh=MWg5M2lnZm9yZG5ubA%3D%3D&utm_source=qr">
                    <FaInstagram />
                  </a>
                </i>
                <i className="text-2xl flex justify-center items-center w-10 h-10 bg-[#0077B5] rounded-full cursor-pointer">
                  <a href="https://www.linkedin.com/in/saiyam-jain-506b87275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <FaLinkedin />
                  </a>
                </i>
              </div>
            </div>
            <div className="flex flex-col  gap-4 py-8 justify-between w-[400px] h-[600px] bg-[#fff] rounded-xl ">
              <div className="h-[90%]  overflow-hidden ">
                <img className="" src={meet3} alt="" />
              </div>
              <div className=" ">
                <h1 className="text-center text-2xl text-gray-800 font-bold pb-2">
                  Subrat Samal
                </h1>
                <p className="text-center text-gray-800 font-medium">Faculty</p>
              </div>
              <div className="flex pb-4 w-[100%] justify-center gap-10">
                {" "}
                <i className="text-2xl flex justify-center items-center w-10 h-10 bg-[#25d366] rounded-full cursor-pointer">
                  <a href="https://api.whatsapp.com/send?phone=918826613929">
                    <FaWhatsapp />
                  </a>
                </i>
                <i className="text-2xl flex justify-center items-center w-10 h-10 bg-[#E4405F] rounded-full cursor-pointer">
                  <a href="https://www.instagram.com/iamsubratsamal?utm_source=qr&igsh=ZmVlMmhsdG0yMnI5">
                    <FaInstagram />
                  </a>
                </i>
                <i className="text-2xl flex justify-center items-center w-10 h-10 bg-[#0077B5] rounded-full cursor-pointer">
                  <a href="https://www.linkedin.com/in/subrat-samal-2379981a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <FaLinkedin />
                  </a>
                </i>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white md:p-40 py-20 px-10" id="about">
          <h1 className="text-gray-700 font-extrabold xl:text-6xl lg:text-4xl md:text-4xl text-2xl text-center">
            From The Director's Desk
          </h1>
          <div className="flex lg:flex-row flex-col gap-10 justify-center items-center pt-28 w-[100%] ">
            <div className="bg-gray-500 lg:w-[500px] lg:h-[500px] md:w-[200px] md:h-[200px] w-[200] h-[200] rounded-full overflow-hidden ">
              {" "}
              <img
                className="lg:h-[100%] lg:translate-y-0 md:-translate-y-16 w-[100%] object-cover "
                src={director2}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-10 lg:w-[80%] md:[100%]">
              <div className="text-gray-700 xl:text-4xl lg:text-2xl font-bold lg:text-center md:text-center">
                "Success Doesn’t Come To You,
                <br />{" "}
                <div className="xl:pl-72 lg:pl-0">
                  You Go To It." <br />
                  <div className="xl:pl-40 lg:pl-0">-Marva Collins</div>
                </div>
              </div>
              <div className="text-gray-700 xl:text-xl lg:text-md font-medium">
                Our Educational Approach is centred around fostering the
                holistic development of children, with emphasis on building a
                strong foundation in Mathematics, a subject which is a necessity
                in all spheres of life. We believe in nurturing each child,
                equipping him with the skills and knowledge necessary for future
                success. By development of a solid mathematical foundation, we
                aim to empower children with the critical thinking and
                problem-solving abilities that are vital for their overall
                growth and preparedness for future achievements. <br /> A
                burning example of our ‘Teaching Method’ can be observed through
                the achievements of my son and daughter, who are currently
                studying in prestigious institutes of the country: Indian
                Institute of Technology, Bombay (IIT-B) & Shri Ram College of
                Commerce (SRCC). This success underscores the effectiveness of
                our commitment to laying a robust foundation in every child.
              </div>
            </div>
          </div>
        </section>
        <section className="my-10  ">
          <h1 className="md:text-6xl text-2xl text-gray-300 text-center font-extrabold">
            TESTIMONIALS
          </h1>
          <div className="flex justify-center items-center pt-14">
            <Slider {...settings} className="w-[90%]">
              <div className="bg-transparent md:h-[450px] h-[500px] rounded-3xl overflow-hidden">
                <div className="flex flex-col items-center justify-center bg-white md:h-[400px] h-[450px] rounded-3xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                  <img className="lg:w-16 md:w-14 w-10" src={quotes} alt="" />
                  <div className="text-gray-800 font-semibold xl:text-xl lg:text-sm md:text-sm text-[12px]  px-10 md:py-8 py-6">
                    RV Institute has proven to be an exceptional educational
                    haven, fostering a dynamic learning environment. It stands
                    out as the best place for holistic development, where our
                    child, Armaan, has not only mastered Mathematics and Science
                    but has also acquired invaluable life skills. The
                    institute's innovative approach and dedicated faculty have
                    significantly enriched Armaan's educational journey. RV
                    Institute is undoubtedly a nurturing space where students
                    not only learn but also flourish, making it the epitome of
                    academic excellence.
                  </div>
                  <div className="text-gray-800 md:text-xl text-sm font-bold text-center">
                    Abha Gahlawat <br /> - Mother of Mansi and Armaan
                  </div>
                  <div className="md:w-20 md:h-20 w-16 h-16 bg-slate-400 rounded-full left-[50%] lg:translate-y-[60px] md:translate-y-[40px] translate-y-[36px]  overflow-hidden ">
                    <img src={rev1} alt="" />
                  </div>
                </div>
              </div>
              <div className="bg-transparent md:h-[450px] h-[500px] rounded-3xl overflow-hidden">
                <div className="flex flex-col items-center justify-center bg-white md:h-[400px] h-[450px] rounded-3xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                  <img className="lg:w-16 md:w-14 w-10" src={quotes} alt="" />
                  <div className="text-gray-800 font-semibold xl:text-xl lg:text-sm md:text-sm text-[14px] px-10 md:py-8 py-6">
                    I would like to extend my sincere gratitude towards your
                    gracious efforts in teaching my daughter Ruchi Gaur and son
                    Aakash Gaur and modelling them. With your guidance,my son
                    and daughter had developed into confident and capable
                    children. They got brilliant results in their 10 class
                    because of your efforts. Thank you for being such an
                    important part in our children’s development.
                  </div>
                  <div className="text-gray-800 md:text-xl text-sm font-bold text-center">
                    Anil Kumar and Manju <br /> - Parents of Aakash Gaur and
                    Ruchi Gaur
                  </div>
                  <div className="md:w-20 md:h-20 w-16 h-16 bg-slate-400 rounded-full left-[50%] lg:translate-y-[60px] md:translate-y-[50px] translate-y-[30px] overflow-hidden">
                    <img className="h-[100%] object-cover" src={rev2} alt="" />
                  </div>
                </div>
              </div>
              <div className="bg-transparent md:h-[450px] h-[500px] rounded-3xl overflow-hidden">
                <div className="flex flex-col items-center justify-center bg-white md:h-[400px] h-[450px] rounded-3xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                  <img className="lg:w-16 md:w-14 w-10" src={quotes} alt="" />
                  <div className="text-gray-800 font-semibold xl:text-xl lg:text-sm md:text-sm text-[13px]  px-10 md:py-8 py-6">
                    My kids have been going there for the past 6 year, and their
                    grades have had a drastic change. The concepts of maths and
                    science feel far more easier to them. Things are taught in a
                    burden-less, easy and fun manner. The environment of the
                    institute is also light hearted.The competitions help to
                    boost their confident and help to improve themselves. Sonia
                    ma’am is very benevolent. She is very thorough and helps
                    them grasp the concepts which are difficult to understand.
                  </div>
                  <div className="text-gray-800 md:text-xl text-sm font-bold text-center">
                    Nidhi Dabas <br /> - Mother of Niyati and Divam
                  </div>
                  <div className="md:w-20 md:h-20 w-16 h-16 bg-slate-400 rounded-full left-[50%] lg:translate-y-[60px] md:translate-y-[50px] translate-y-[36px] overflow-hidden">
                    {" "}
                    <img src={rev3} alt="" />
                  </div>
                </div>
              </div>
              <div className="bg-transparent md:h-[450px] h-[500px] rounded-3xl overflow-hidden">
                <div className="flex flex-col items-center justify-center bg-white md:h-[400px] h-[450px] rounded-3xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
                  <img className="lg:w-16 md:w-14 w-10" src={quotes} alt="" />
                  <div className="text-gray-800 font-semibold xl:text-xl lg:text-sm md:text-sm text-[13px]  px-10 md:py-8 py-6">
                    I'm genuinely pleased by the efforts done by the RV
                    institute in my child's learning. Their dedication and
                    passion towards the work is evident in my child's results.
                    The teachers are really hardworking and supportive. A great
                    teacher is someone who not only teaches the kid, but also
                    acts like a proper mentor and guidance figure, and this has
                    been exceptionally shown by the teachers at RV institute.
                    Overall my experience here has been really amazing and I
                    would recommend all parents to give this institute a chance
                  </div>
                  <div className="text-gray-800 md:text-xl text-sm font-bold text-center">
                    Mona Gupta <br /> - Mother of Bhumi
                  </div>
                  <div className="md:w-20 md:h-20 w-16 h-16 bg-slate-400 rounded-full left-[50%] lg:translate-y-[60px] md:translate-y-[50px] translate-y-[30px] overflow-hidden">
                    {" "}
                    <img src={rev4} alt="" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section className=" p-20 bg-white">
          <h1 className="text-gray-700 text-center text-6xl p-5 my-6 font-extrabold">
            Gallery
          </h1>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 place-items-center pt-5 gap-y-20">
            <div className="w-80 h-80 bg-gray-500 rounded-2xl shadow-[rgba(0,_0,_0,_1)_0px_25px_50px_5px] overflow-hidden">
              {" "}
              <img src={img1} alt="" />
            </div>
            <div className="w-80 h-80 bg-gray-500 rounded-2xl shadow-[rgba(0,_0,_0,_1)_0px_25px_50px_5px] overflow-hidden">
              {" "}
              <img src={img2} alt="" />
            </div>
            <div className="w-80 h-80 bg-gray-500 rounded-2xl shadow-[rgba(0,_0,_0,_1)_0px_25px_50px_5px] overflow-hidden">
              {" "}
              <img className="h-[100%] object-cover " src={img3} alt="" />
            </div>
            <div className="w-80 h-80 bg-gray-500 rounded-2xl shadow-[rgba(0,_0,_0,_1)_0px_25px_50px_5px] overflow-hidden">
              {" "}
              <img className="h-[100%] object-cover " src={img4} alt="" />
            </div>
            <div className="w-80 h-80 bg-gray-500 rounded-2xl shadow-[rgba(0,_0,_0,_1)_0px_25px_50px_5px] overflow-hidden">
              {" "}
              <img className="h-[100%] object-cover " src={img5} alt="" />
            </div>
            <div className="w-80 h-80 bg-gray-500 rounded-2xl shadow-[rgba(0,_0,_0,_1)_0px_25px_50px_5px] overflow-hidden">
              {" "}
              <img className="h-[100%] object-cover " src={img6} alt="" />
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </div>
    </main>
  );
}
