import React from "react";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import Principal from "../components/Principal";
import Institute from "../components/Institute";
import { Link, useNavigate } from "react-router-dom/dist";
import { Navigate } from "react-router-dom/dist";
export default function NavBar() {
  const [role, setrole] = useState(localStorage.getItem("role"));
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    navigate("/");
    window.location.reload(true);
  };
  const [close, setClose] = React.useState(false);
  function closeSideBar() {
    setClose(!close);
  }
  const navigate = useNavigate();
  return (
    <>
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={closeSideBar}
      >
        <i className="rounded-md text-black">
          <GiHamburgerMenu className="px-2 border rounded-md" size={"50"} />
        </i>
      </span>
      <div
        className={`${
          close ? "hidden " : "block "
        } fixed top-0 bottom-0 lg:left-0 p-2 w-[400px] md:w-[300px] text-center bg-gray-900`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="px-2 py-1 rounded-md bg-blue-600">
              <RxDashboard size={"30"} />
            </i>
            <h1 className="font-bold text-gray-200 text-xl pl-5">
              {role === "admin" ? "Admin" : "Principal"} Dashboard
            </h1>
            <i
              className="cursor-pointer ml-24 lg:hidden"
              onClick={closeSideBar}
            >
              <GrClose className="bg-white" size={"25"} />
            </i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <Link to={"/"} className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center">
          <i className=" text-sm"></i>
          <span className="text-xl ml-4 text-gray-200 font-bold">
            Home
          </span>
        </Link>
        <Link
          to={"/institute-list"}
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center"
        >
          <i className=" text-sm"></i>
          <span className="text-xl ml-4 text-gray-200 font-bold">
            Institute
          </span>
        </Link>
        <Link
          to={"institute-creation"}
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center"
        >
          <i className=" text-sm"></i>
          <span className="text-xl ml-4 text-gray-200 font-bold">
            Institute Admin
          </span>
        </Link>
        <Link
          to={"student-creation"}
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center"
        >
          <i className=" text-sm"></i>
          <span className="text-xl ml-4 text-gray-200 font-bold">
            Student Details
          </span>
        </Link>
        <div
          onClick={handleLogout}
          className="p-2.5 flex mt-3 items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-center"
        >
          <i className=" text-sm"></i>
          <span className="text-xl ml-4 text-gray-200 font-bold">Logout</span>
        </div>
      </div>
    </>
  );
}
