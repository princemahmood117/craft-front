import { useEffect } from "react";

import bgi from "../assets/banner.jpg";
import { Link } from "react-router-dom";





const Home = () => {

       // show the top of the page after clicking on "Read more"
       useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="p-4">
      <div
        className="hero min-h-screen rounded-md"
        style={{
          backgroundImage: `url(${bgi})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md">
            <p className="mb-5 text-2xl text-purple-600">
              Welcome to CraftNCrafts
            </p> <br />  <Link to='/allCrafts' className="flex justify-center text-xl"> <button className="bg-purple-600 p-2 rounded hover:bg-purple-900 transition">Visit now</button> </Link>
          </div>

          
        </div>
 
      </div>



    </div>
  );
};

export default Home;
