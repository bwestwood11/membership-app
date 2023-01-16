import React from 'react';
import { FaTiktok, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left pt-5">
            <h5 className="mb-4 font-bold">About Us</h5>
            <p>We are a local appliance store in Tampa, FL that has been in business for over 18 years.</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left pt-8 pl-8">
            <h5 className="mb-4 font-bold">Contact Us</h5>
            <p>5126 Vivian Pl<br />Tampa, FL 33619</p>
            <p>
              <a href="mailto:info@example.com" className="text-white hover:text-gray-400">info@TheAppliancePlug.com</a>
            </p>
            <Link href='/' className='hover:text-gray-400 cursor-pointer'><p>Terms of Services</p></Link>
            <Link href='/' className='hover:text-gray-400 cursor-pointer'><p>Privacy Policy</p></Link>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left pt-8">
            <h5 className="mb-4 font-bold">Follow Us</h5>
            <div className="flex justify-center md:justify-start">
              <a href="https://www.facebook.com/TheAppliancePlug" target="_blank" rel="noopener noreferrer" className="mr-4">
                < FaFacebook />
              </a>
              <a href="https://twitter.com/AppliancePlug" target="_blank" rel="noopener noreferrer" className="mr-4">
                < FaTwitter />
              </a>
              <a href="https://www.instagram.com/the_appliance_plug/" target="_blank" rel="noopener noreferrer" className="mr-4">
                < FaInstagram />
              </a>
              <a href="https://www.youtube.com/channel/UCXRaNufTL_ez75DOzHtMMXQ" target="_blank" rel="noopener noreferrer" className="mr-4">
                < FaYoutube />
              </a>
              <a href="https://www.tiktok.com/@theapplianceplug" target="_blank" rel="noopener noreferrer" className="mr-4">
                < FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;