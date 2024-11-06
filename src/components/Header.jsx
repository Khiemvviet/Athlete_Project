import React from "react";
import { IoFootball } from "react-icons/io5";
import { Link } from "react-router-dom";
import Text from "./Text";


const Header = () => {
    return (
        <div className=" fixed bg-n-4 w-full  items-center mx-auto border-n-4 py-6 px-8" >
            <div className="justify-between flex items-center px-5">
                <div className="flex justify-between items-center">
                    <Link to= "/">
                    <IoFootball size={50} color="black"/>
                    </Link>
                </div>

                <div className=" inline text-n-1 hover:text-n-2 transition-colors">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="Contact">
                        Contact
                    </Link>
                    <Link to="Nutrition">
                        Nutrition
                    </Link>
                    <Link to="Plan">
                        Plan
                    </Link>
                </div>

            </div>
            <Text />
        </div>
        

    );
};


export default Header;