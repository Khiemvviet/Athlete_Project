import React, { useState } from "react";
import { IoFootball } from "react-icons/io5";
import { Link } from "react-router-dom";
import Text from "./Text";
import { navigation } from "../constants"


const Header = () => {
    const[openNavigation, setOpenNavigation]= useState(false);
    const[openSubmenu, setOpenSubmenu]= useState(false);

    const toggleNavigation = ()=>{
        if (openNavigation){
            setOpenNavigation(false);
            enablePageScroll();
        }
        else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    return (
        <div className="fixed flex bg-n-4 w-full z-50 top-0 left-0 px-20 py-5 mb-5" >
            <div className="flex justify-between items-center flex-1">
                <Link to= "/">
                <IoFootball size={80}color="red"></IoFootball>
                </Link>
            </div>

            <div className="flex text-n-1  flex-1 font-bold justify-end">
                <div className="flex-10">
                    <ul className="flex flex-col gap-20 mr-20 mt-7 items-center lg:flex-row ">
                        <Link to="/"className=" hover:text-n-2" >
                            <li>Home</li>
                        </Link>
                        <Link to="Muscle"className=" hover:text-n-2" >
                            <li>Muscle</li>
                        </Link>
                        <Link to="/Nutriton" className=" hover:text-n-2" >
                            <li>Nutriton</li>
                        </Link>
                        <Link to="/Plan" className=" hover:text-n-2">
                            <li>Plan</li>
                        </Link>
                        <Link to="Contact"className=" hover:text-n-2" >
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
           
           
           
           {/* <div className=" bg-n-1 text-n-2"><Text /></div> */}
            
        </div>

         
        

        

    );
    
};


export default Header;