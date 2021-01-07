import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
  } from 'react-icons/fa';
  import { Link } from 'react-router-dom';

// images
import logo from 'assets/images/logo.svg';

// translation
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import messages from 'containers/HomePage/messages';

const footerSocial = {
    // logo: logo,
    // mail: 'hello@hello.io',
    // phone: '123-456-7890',
    socialLinks: [
      {
        id: 1,
        icon: <FaFacebookF />,
        name: 'facebook',
        link: 'https://www.facebook.com/renmarkfinancial',
      },
      {
        id: 2,
        icon: <FaTwitter />,
        name: 'twitter',
        link: 'https://twitter.com/RenmarkMedia',
      },
      {
        id: 3,
        icon: <FaLinkedinIn />,
        name: 'linkedIn',
        link: 'https://www.linkedin.com/company/renmark-financial-communications',
      },
      {
        id: 4,
        icon: <FaInstagram />,
        name: 'instagram',
        link: 'https://www.instagram.com/renmarkfinancial/',
      },
    ],
  };

  const Footer = ({ intl  }) => {
  const year = new Date().getFullYear();
  const fc = intl.formatMessage(messages.footerCopyrightText);
  const footerCopyright =`© 1999 - ${year} ${fc}`;

  return (
    <>
        <footer className="w-full text-gray-700 bg-gray-100 body-font">
            <div className="container mx-auto pt-4">
                <div className="flex flex-wrap text-center md:text-left">
                        <div className="w-full md:w-3/12 lg:w-3/12 px-4 mt-4">
                            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                                <img className="object-fill w-32" src={logo} alt="Renmark Financial Communications Inc." />                       
                            </a>
                            <h5 className="text-md mt-4 mb-2 text-gray-700">
                                <FormattedMessage {...messages.footerCompanyText} />
                            </h5>
                            {/* <div className="mt-6 lg:mb-0 mb-6">
                                <ul className="flex list-none mr-auto items-center justify-center md:justify-start">
                                    {footerSocial.socialLinks.map(item => (
                                        <li className="flex items-center justify-center hover:text-blue-800 text-gray-500 pr-4 pb-4 lg:py-2 " key={`link-key${item.id}`}>
                                            <a href={item.link} target="_blank" aria-label={item.name}>
                                                {item.icon}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
                        </div>
                        
                        <div className="w-full md:w-9/12 lg:w-9/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full xs:w-6/12 md:w-6/12 lg:w-3/12 px-4 ml-auto">
                                    <span className="block uppercase text-gray-700 text-sm font-semibold mt-4 mb-4">
                                        <FormattedMessage {...messages.footerAbout} />
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link
                                                className="text-gray-500 hover:text-dark font-semibold block pb-2 text-sm"
                                                to="/about"
                                            >
                                                <FormattedMessage {...messages.topMenuAbout} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-gray-500 hover:text-dark font-semibold block pb-2 text-sm"
                                                to="/team"
                                            >
                                                <FormattedMessage {...messages.topMenuOurTeam} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-gray-500 hover:text-dark font-semibold block pb-2 text-sm"
                                                to="/subscribe"
                                            >
                                                <FormattedMessage {...messages.topMenuSubscribe} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-gray-500 hover:text-dark font-semibold block pb-2 text-sm"
                                                to="/careers"
                                            >
                                                <FormattedMessage {...messages.topMenuCareers} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="w-full xs:w-6/12 md:w-6/12 lg:w-3/12 px-4 ">
                                    <span className="block uppercase text-gray-700 text-sm font-semibold mt-4 mb-4">
                                        <FormattedMessage {...messages.footerEvents} />
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                        <Link
                                            className="text-gray-500 hover:text-dark font-semibold block pb-2 text-sm"
                                            to="/events"
                                        >
                                            <FormattedMessage {...messages.menuEvents} />
                                        </Link>
                                        </li>
                                        <li>
                                        <Link
                                            className="text-gray-500 hover:text-dark font-semibold block pb-2 text-sm"
                                            to="/newsroom"
                                        >
                                            <FormattedMessage {...messages.menuNews} />
                                        </Link>
                                        </li>
                                        {/* <li>
                                        <Link
                                            className="text-gray-500 hover:text-dark font-semibold block pb-2 text-sm"
                                            to="/"
                                        >
                                            Link name
                                        </Link>
                                        </li> */}                                    
                                    </ul>
                                </div>
                            
                                <div className="w-full xs:w-6/12 md:w-6/12 lg:w-3/12 px-4">
                                    <span className="block uppercase text-gray-700 text-sm font-semibold mt-4 mb-4">
                                        <FormattedMessage {...messages.footerCompany} />
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link
                                                className="text-gray-500 hover:text-dark font-semibold block pb-2 text-sm"
                                                to="/services"
                                            >
                                                <FormattedMessage {...messages.menuServices} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-gray-500 hover:text-dark font-semibold block pb-2 text-sm"
                                                to="/clients"
                                            >
                                                <FormattedMessage {...messages.menuClients} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-gray-500 hover:text-dark font-semibold block pb-2 text-sm"
                                                to="/contact"
                                            >
                                                <FormattedMessage {...messages.menuContact} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="w-full xs:w-6/12 md:w-6/12 lg:w-3/12 px-4">
                                    {/* <span className="block uppercase text-gray-700 text-sm font-semibold mt-4 mb-4">
                                        <FormattedMessage {...messages.footerPolicy} />
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                        <Link
                                            className="text-gray-500 hover:text-dark font-semibold block pb-2 text-sm"
                                            to="/privacy"
                                        >
                                            <FormattedMessage {...messages.footerPrivacyLinksPrivacy} />
                                        </Link>
                                        </li>
                                        <li>
                                        <Link
                                            className="text-gray-500 hover:text-dark font-semibold block pb-2 text-sm"
                                            to="/disclosure"
                                        >
                                            <FormattedMessage {...messages.footerPrivacyLinksDisclosure} />
                                        </Link>
                                        </li>                                    
                                    </ul> */}
                                    <span className="block uppercase text-gray-700 text-sm font-semibold mt-4 mb-4">
                                        Subscribe
                                    </span>
                                    <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
                                    <form>
                                    <div className="flex flex-wrap mb-4">
                                        <div className="w-full">
                                        <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                                        <div className="relative flex items-center">
                                            <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                                            <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                                            <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                                            <svg className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                            </svg>
                                            </button>
                                        </div>
                                        {/* Success message */}
                                        {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                                        </div>
                                    </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                <div className="container px-5 py-4 mx-auto">
                    <p className="text-xs text-gray-700 capitalize text-center">
                        <FormattedMessage {...messages.footerDisclaimerParagraph1} />
                    </p>
                    <p className="text-xs py-4 text-gray-700 capitalize text-center">
                        <FormattedMessage {...messages.footerDisclaimerParagraph2} />
                    </p>
                    <p className="text-xs text-gray-700 capitalize text-center">
                        <FormattedMessage {...messages.footerDisclaimerParagraph3} />
                    </p>
                </div>

            </div>

            

            <div className="bg-gray-100">
                <div className="container px-5 py-4 mx-auto">
                    {/* <p className="text-sm text-gray-700 capitalize text-center">{footerCopyright}</p> */}

                    <div className="md:flex md:items-center md:justify-between">
                        {/* Social links */}
                        <ul className="flex justify-center mb-4 md:order-1 md:ml-4 md:mb-0">
                            <li>
                                <a
                                target="_blank"
                                href="https://twitter.com/RenmarkMedia"
                                className="flex justify-center items-center text-gray-600 hover:text-blue-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                aria-label="Twitter"
                                >
                                <svg
                                    className="w-8 h-8 fill-current"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                </svg>
                                </a>
                            </li>
                            <li className="ml-4">
                                <a
                                target="_blank"
                                href="https://www.facebook.com/renmarkfinancial"
                                className="flex justify-center items-center text-gray-600 hover:text-blue-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                aria-label="Facebook"
                                >
                                <svg
                                    className="w-8 h-8 fill-current"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                </svg>
                                </a>
                            </li>
                            <li className="ml-4">
                                <a
                                target="_blank"
                                href="https://www.instagram.com/renmarkfinancial"
                                className="flex justify-center items-center text-gray-600 hover:text-blue-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                aria-label="Instagram"
                                >
                                <svg
                                    className="w-8 h-8 fill-current"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="20.145" cy="11.892" r="1" />
                                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                                </svg>
                                </a>
                            </li>
                            <li className="ml-4">
                                <a
                                target="_blank"
                                href="https://www.linkedin.com/company/renmark-financial-communications"
                                className="flex justify-center items-center text-gray-600 hover:text-blue-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                aria-label="Linkedin"
                                >
                                <svg
                                    className="w-8 h-8 fill-current"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                                </svg>
                                </a>
                            </li>
                        </ul>

                        {/* Copyrights note */}
                        <div className="text-gray-600 text-sm mr-4 text-center ">
                            {footerCopyright}
                        </div>
                    </div>
                </div>
            </div>
        </footer>    
    </>
  );
}

// Footer style props
Footer.propTypes = {
    intl: intlShape.isRequired,
  };

export default injectIntl(Footer);
  