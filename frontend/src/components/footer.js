import React from "react";
import logo from "../assets/logo.png"; // Adjust the path if needed

export default function Footer() {
    return (
        <footer className="bg-primary-3 w-full py-8 px-8 text-primary-1 font-bold text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
                <img src={logo} alt="Logo" className="w-32 mb-4 sm:mb-0" />

                <div className="flex flex-col sm:flex-row sm:gap-x-8 text-xs md:text-sm lg:text-base">
                    <p>Pawsitively</p>
                </div>
            </div>

            <div className="footer-sections grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* About Section */}
                <div>
                    <h3 className="text-lg text-primary-1 font-semibold mb-2">About Us</h3>
                    <p className="text-sm">
                        Your trusted platform for pet adoption. We connect loving homes with animals in need,
                        helping them find a safe and caring place.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-lg text-primary-1 font-semibold mb-2">Quick Links</h3>
                    <ul className="text-sm">
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/adopt" className="hover:text-white">Adopt a Pet</a></li>
                        <li><a href="/shelters" className="hover:text-white">Find Shelters</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-lg text-primary-1 font-semibold mb-2">Contact Us</h3>
                    <p className="text-sm">Email: contact@petadoption.com</p>
                    <p className="text-sm">Phone: +123-456-7890</p>
                    <p className="text-sm">Address: 123 Pet Lane, Animal City, AC 12345</p>
                </div>
            </div>

            <div className="mt-8 text-sm">
                &copy; 2024 Pet Adoption Platform | Designed with ❤️
            </div>
        </footer>
    );
}
