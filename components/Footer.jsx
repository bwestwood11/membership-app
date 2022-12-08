import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h5 className="mb-4 font-bold">About Us</h5>
            <p>We are a local appliance store in Tampa, FL.</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h5 className="mb-4 font-bold">Contact Us</h5>
            <p>5126 Vivian Pl<br />Tampa, FL 33619</p>
            <p>
              <a href="mailto:info@example.com" className="text-white hover:text-gray-400">info@TheAppliancePlug.com</a>
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h5 className="mb-4 font-bold">Follow Us</h5>
            <div className="flex justify-center md:justify-start">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;