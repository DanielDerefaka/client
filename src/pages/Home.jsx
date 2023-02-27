import React from "react";
import { Link} from "react-router-dom"


const Home = () => {
  return (
    <div  className="mt-[10%] w-[100%] ">
      <div className="flex md:flex-row">
        <Link to="/register" className="ml-5 mr-5 w-[100%]">
          {" "}
          <button className="w-[100%] bg-blue-600 p-2 ml-5 mr-5 cursor-pointer text-white">
            {" "}
            Register
          </button>
        </Link>
        <Link to="/login" className="ml-5 mr-[5%] w-[100%]">
          {" "}
          <button className="w-[100%] bg-blue-600 p-2 ml-5 mr-5 cursor-pointer text-white">
            {" "}
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
