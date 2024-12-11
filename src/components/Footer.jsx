import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import { motion } from 'framer-motion'; // For animations

const Footer = () => {
  return (
    <footer className="relative bg-blue-500 pt-8 pb-6 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2">
              Find us on any of these platforms, we respond in 1-2 business
              days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-200 font-semibold block pb-2 text-sm cursor-pointer"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="blog"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-200 font-semibold block pb-2 text-sm cursor-pointer"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="github"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-200 font-semibold block pb-2 text-sm cursor-pointer"
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="free-products"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-200 font-semibold block pb-2 text-sm cursor-pointer"
                    >
                      Free Products
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="license"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-200 font-semibold block pb-2 text-sm cursor-pointer"
                    >
                      MIT License
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="terms"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-200 font-semibold block pb-2 text-sm cursor-pointer"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="privacy"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-200 font-semibold block pb-2 text-sm cursor-pointer"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      smooth={true}
                      duration={500}
                      className="hover:text-blue-200 font-semibold block pb-2 text-sm cursor-pointer"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <motion.hr
          className="my-6 border-blue-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm font-semibold py-1">
              Copyright © {new Date().getFullYear()} Notus JS by
              <a
                href="https://www.creative-tim.com"
                className="hover:text-blue-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
