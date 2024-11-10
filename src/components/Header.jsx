import React, { useState, useEffect} from "react";
import { IoFootball } from "react-icons/io5";
import { Link } from "react-router-dom";
import Text from "./Text";
import { navigation } from "../constants"
import MenuSvg from "./MenuSvg"
import { GoChevronDown } from "react-icons/go";
import { disablePageScroll, enablePageScroll } from "scroll-lock";



const Header = () => {
    const[openNavigation, setOpenNavigation]= useState(false);
    const[openSubmenu, setOpenSubmenu]= useState(null);

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
    
    const handleNavClick =()=>{
        setOpenNavigation(false);
        enablePageScroll();
        toggleSubmenu();
    };

    const toggleSubmenu = (id) =>{
        if (openSubmenu==id){
            setOpenSubmenu(null)
        } else{
            setOpenSubmenu(id)
        }
    };

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1024) {
            setOpenSubmenu(null);
            setOpenNavigation(false);
            enablePageScroll();
          }
        };
    
        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
      }, []);


    return (
        <>
        <div className="fixed flex bg-n-4 w-full h-32 z-50 top-0 left-0 pl-30 px-20 py-3" >
            <div className=" flex justify-between flex-1">
                <Link to= "/">
                <IoFootball size={100}color="red"></IoFootball>
                </Link>
            </div>

            <nav className={`${ 
                openNavigation ? "flex" : "hidden"}  text-n-1 font-bold justify-end flex-1 lg:flex `}>
                <div className="flex-10">
                    <div className="flex flex-col gap-20 mr-20 mt-10 items-center lg:flex-row">
                        {navigation.map((item) => (
                            <div 
                                key={item.id}
                                className="relative"
                            >
                                <Link
                                    to={item.hasSubmenu ? "#" :item.url}
                                    className=" text-n-1 hover:text-n-2 font-bold text-sm flex flex-row"
                                    onClick={()=>{
                                        if (item.hasSubmenu){
                                            toggleSubmenu(item.id);
                                        } else{
                                            handleNavClick();
                                        }
                                    }}
                                >
                                    {item.title}
                                    {!openNavigation && item.hasSubmenu && (
                                        <GoChevronDown
                                            className={`ml-2 mt-1 transform transition-transform ${
                                                openSubmenu === item.id ? "rotate-180" : ""
                                            }`}
                                            size={16}
                                            color="white"
                                        />
                                    )}
                                </Link>

                                {!openNavigation ? (item.hasSubmenu && openSubmenu === item.id && (
                                    <div className="absolute w-auto mt-6 z-10 rounded-lg bg-n-4 shadow-lg ">
                                        {item.submenu.map((submenuItem) => (
                                            <Link
                                            key = {submenuItem.id}
                                            to={submenuItem.url}
                                            className="block px-8 py-2 text-n-1 hover:text-n-2 font-bold mt-2 text-sm "
                                            onClick={handleNavClick}
                                            >
                                                {submenuItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                )) : (item.hasSubmenu && ( 
                                    <div 
                                    className= "">
                                        {item.submenu.map((submenuItem) => (
                                            <Link
                                            key = {submenuItem.id}
                                            to={submenuItem.url}
                                            className=" text-n-1 hover:text-n-2 font-bold text-sm flex flex-col"
                                            onClick={handleNavClick}
                                            >
                                                {submenuItem.title}
                                            </Link>
                                        ))}
                                    </div>
                        
                                )) }
                            </div>  
                        ))}   
                    </div>
                </div>
            </nav>

            <div
            className="lg:hidden"
            onClick={toggleNavigation}
            >
            <MenuSvg openNavigation={openNavigation} />
            </div>

            
        </div>
        </>
    );  
};


export default Header;