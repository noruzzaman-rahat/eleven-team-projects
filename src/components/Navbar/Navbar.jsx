import React from 'react';
import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/dollar-1.png";

const Navbar = ({availalbeBalance}) => {
    return (
        <div className="max-w-[1200px] mx-auto flex justify-between items-center py-2 px-4 bg-gray-100 shadow-md">
            {/* Left Side */}
            <div className="flex items-center">
                <a className="text-xl">
                    <img className="w-[60px] h-[60px]" src={navImg} alt="Logo" />
                </a>
            </div>

            {/* Right Side */}
            <div className="flex items-center">
                <span className="mr-1">{availalbeBalance}</span>
                <span className="mr-1">Coin</span>
                <img className="w-[24px] h-[24px]" src={dollarImg} alt="Coin" />
            </div>
        </div>
    );
};

export default Navbar;
