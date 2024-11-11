import React from "react";
import logo from "../assets/logo.png"; // Adjust the path if needed

export default function Footer() {
    return (
        <div className="bg-primary-3 h-fit w-full pt-8 sm:py-4 px-8 flex flex-col items-center text-primary-1 font-bold">
            <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between">
                <img src={logo} alt="Logo" className="w-32" />
                <div className="flex flex-col gap-y-2 items-end lg:flex-row lg:gap-x-4 text-xs md:text-sm lg:text-base">
                    <div className="flex flex-row items-center lg:gap-2">
                        <div className="text-right"></div>
                    </div>
                    <div className="flex flex-row lg:gap-2 items-center text-right hover:text-white">
                        <p>StudentsxCEOs International Summit</p>
                    </div>
                    <div className="flex flex-row lg:gap-2 items-center text-right hover:text-white">
                        <p className="">@intersummitsxc</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
