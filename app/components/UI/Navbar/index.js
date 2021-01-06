import React from 'react';
import {
  FaBars,
  FaFileAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaArrowAltCircleDown,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// images
import logo from 'assets/images/logo.svg';

// translation
import { FormattedMessage } from 'react-intl';
import messages from 'containers/HomePage/messages';

const links = [
  {
    path: '/newsroom',
    name: <FormattedMessage {...messages.menuNews} />,
  },
  {
    path: '/events',
    name: <FormattedMessage {...messages.menuEvents} />,
  },
  {
    path: '/services',
    name: <FormattedMessage {...messages.menuServices} />,
  },
  {
    path: '/companies',
    name: <FormattedMessage {...messages.menuClients} />,
  },
  {
    path: '/social-media',
    name: <FormattedMessage {...messages.menuSocial} />,
  },
  {
    path: '/ourcontact',
    name: <FormattedMessage {...messages.menuContact} />,
  },
];

const topLinks = [
  {
    path: '/about',
    name: <FormattedMessage {...messages.topMenuAbout} />,
  },
  {
    path: '/team',
    name: <FormattedMessage {...messages.topMenuOurTeam} />,
  },
  {
    path: '/subscribe',
    name: <FormattedMessage {...messages.topMenuSubscribe} />,
  },
  {
    path: '/careers',
    name: <FormattedMessage {...messages.topMenuCareers} />,
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between pb-3 navbar-expand-lg bg-white shadow">
        <div className="w-full bg-gray-100 hidden lg:block">
          <div className="container px-2 mx-auto flex flex-wrap items-center justify-between ">
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              {topLinks.map((route, i) => (
                <li
                  className="flex items-center hover:text-blue-800 text-gray-800 px-2 pb-4 lg:py-2 "
                  key={i}
                >
                  <Link
                    to={route.path}
                    // onClick={() => {
                    //     logEvent('menu', `'${route.name}'`);
                    // }}
                  >
                    <span className="text-sm">{route.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto px-2">
              <li className="flex items-center">
                <button
                  className="bg-blue-800 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between  pt-2">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4  whitespace-no-wrap uppercase"
            >
              <img
                className="object-fill w-52 md:w-48 lg:w-full"
                src={logo}
                alt="Renmark Financial Communications Inc."
              />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none${
              navbarOpen ? ' block' : ' hidden'
            }`}
            id="example-navbar-warning"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
                        <li className="flex items-center">
                            <a
                            className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="/"
                            >
                            <FaFileAlt className="text-gray-500 far fa-file-alt text-lg leading-lg mr-2"/>{" "}
                            Docs
                            </a>
                        </li>
                        </ul> */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {links.map((route, i) => (
                <li
                  className="flex items-center hover:text-blue-800 text-gray-800 px-3 py-4 lg:py-2 "
                  key={i}
                >
                  
                  <Link
                    to={route.path}
                    // onClick={() => {
                    //     logEvent('menu', `'${route.name}'`);
                    // }}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
              <ul className="flex flex-col lg:hidden list-none lg:ml-auto ">
                <li className="flex items-center">
                  <button
                    className="bg-blue-800 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Sign In
                  </button>
                </li>
              </ul>

              {/* <li className="flex items-center hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 ">
                            <a
                            className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                            target="_blank"
                            >
                            <FaFacebook className="text-gray-500 fab fa-facebook text-lg leading-lg " />}
                            <span className="lg:hidden inline-block ml-2">Share</span>
                            </a>
                        </li>

                        <li className="flex items-center">
                            <a
                            className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
                            target="_blank"
                            >
                            <FaTwitter className="text-gray-500 fab fa-twitter text-lg leading-lg " />
                            <span className="lg:hidden inline-block ml-2">Tweet</span>
                            </a>
                        </li> 

                        <li className="flex items-center">
                            <a
                            className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar"
                            target="_blank"
                            >
                            <FaLinkedin className="text-gray-500 text-lg leading-lg " />
                            <span className="lg:hidden inline-block ml-2">Star</span>
                            </a>
                        </li> */}

              {/* <li className="flex items-center">
                            <button
                            className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                            type="button"
                            >
                            Download
                            </button>
                        </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
