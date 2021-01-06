import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FormattedDate } from 'react-intl';
import moment from 'moment/moment.js';


import styled, { keyframes } from 'styled-components'
import { themeGet } from '@styled-system/theme-get';

import GlideCarousel from 'components/common/GlideCarousel';
import GlideSlide from 'components/common/GlideCarousel/glideSlide';
import EventBlock from 'components/common/EventBlock';

// translation
import { FormattedMessage } from 'react-intl';
import messages from 'containers/HomePage/messages';


const CarouselArea = styled.div`
  // width: calc(100% - 595px);
  display: flex;
  align-items: center;
  justify-content: center;
  /* @media only screen and (max-width: 1600px) {
    width: calc(100% - 560px);
  }
  @media only screen and (max-width: 1360px) {
    width: 60%;
  }
  @media only screen and (max-width: 1200px) {
    width: 60%;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
  } */

/* ------------------------------- */
  /* Glide controls style */
  /* ------------------------------- */
  .glide {
    .glide__controls {
      margin-top: 30px;
    }

    .glide__controls > div,
    .glide__arrows > button {
      height: 18px;
      padding: 0;
      border: 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: transparent;

      .prev_arrow,
      .next_arrow {
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${themeGet('colors.label', '#C6C6C6')};
        transition: width 0.3s ease;
        position: relative;
        @media only screen and (max-width: 667px) {
          width: 20px;
        }

        &::before,
        &::after {
          content: '';
          display: block;
          width: 14px;
          height: 2px;
          border-radius: 4px;
          background-color: ${themeGet('colors.label', '#C6C6C6')};
          position: absolute;
          z-index: 1;
          transition: all 0.3s ease;
        }

        &.next_arrow {
          &::before {
            right: 0;
            transform: rotate(0);
            transform-origin: top right;
          }
          &::after {
            right: 0;
            transform: rotate(0);
            transform-origin: 14px 2px;
          }
        }

        &.prev_arrow {
          &::before {
            left: 0;
            transform: rotate(0);
            transform-origin: top left;
          }
          &::after {
            left: 0;
            transform: rotate(0);
            transform-origin: 0 2px;
          }
        }
      }

      .next_arrow {
        margin-left: 15px;
      }

      &:hover {
        > span {
          width: 45px;
          border-radius: 4px;
          background-color: ${themeGet('colors.primary', '#0758b7')};
          @media only screen and (max-width: 667px) {
            width: 30px;
          }

          &::before,
          &::after {
            background-color: ${themeGet('colors.primary', '#0758b7')};
          }

          &.prev_arrow {
            &::before {
              transform: rotate(-42deg);
            }
            &::after {
              transform: rotate(42deg);
            }
          }

          &.next_arrow {
            &::before {
              transform: rotate(42deg);
            }
            &::after {
              transform: rotate(-42deg);
            }
          }
        }
      }
    }
  }

  #interior_carousel {
    .glide__slide {
      .item_wrapper {
        display: block;
        height: 100vh;
        max-height: 540px;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        @media only screen and (max-width: 1440px) {
          max-height: 460px;
        }
        @media only screen and (max-width: 1200px) {
          max-height: 420px;
        }
        @media only screen and (max-width: 991px) {
          max-height: 400px;
        }
        @media only screen and (max-width: 767px) {
          max-height: 380px;
        }

        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 30%;
          background: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(0, 0, 0, 0.8)
          );
          position: absolute;
          bottom: 0;
          left: 0;
          transition: height 0.3s ease;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        h4 {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          margin: 0;
          padding: 25px 30px;
          color: ${themeGet('colors.label', '#C6C6C6')};
          font-weight: 600;
          z-index: 1;
          transition: bottom 0.3s ease;

          @media only screen and (max-width: 1440px) {
            font-size: 20px;
          }
        }
      }

      &:hover {
        .item_wrapper {
          &::after {
            height: 70%;
          }

          img {
            transform: scale(1.1);
          }

          h4 {
            color: ${themeGet('colors.white', '#ffffff')};
            bottom: 10px;
          }
        }
      }
    }

    .glide__controls {
      margin-bottom: 20px;
      margin-top:10px;
      > div {
        > span {
          &.next_arrow {
            width: 45px;
            background-color: ${themeGet('colors.primary', '#0758b7')};
            @media only screen and (max-width: 667px) {
              width: 30px;
            }

            &::before {
              background-color: ${themeGet('colors.primary', '#0758b7')};
              transform: rotate(42deg);
            }

            &::after {
              background-color: ${themeGet('colors.primary', '#0758b7')};
              transform: rotate(-42deg);
            }
          }
        }
      }
    }
  }

  
`;

const EventItem = styled(EventBlock)`
  position: relative;
  padding: 50px 30px;
  /* border: 1px solid #f2f4f7; */
  border-radius: 5px;
  background-color: #fff;
  transition: 0.35s ease-in-out;
  @media (max-width: 768px) and (min-width: 768px) {
    padding: 30px 20px;
  }
  @media (max-width: 575px) {
    padding: 10px 25px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    background: linear-gradient(
      138deg,
      rgb(249, 212, 35) 0%,
      rgb(255, 78, 80) 100%
    );
    transition: 0.35s ease-in-out;
  }

  & > div {
    position: relative;
  }

  h2 {
    /* margin-top: 10px; */
    margin: 20px 0px;
    color: rgb(21, 37, 54);
    font-size: 1rem;
    text-transform: uppercase;
    text-shadow: rgb(50, 87, 127) 0px 0px 0px;
  }

  h2, h3,
  p {
    transition: 0.35s ease-in-out;
  }

  .hover-shape {
    width: 20px;
    height: auto;
    position: absolute;
    z-index: 1;
    opacity: 0;
    pointer-events: none;
    transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: rotate(260deg);
  }

  .hover-shape-1 {
    left: 0;
    top: 20px;
  }

  .hover-shape-2 {
    right: 29%;
    top: 0;
  }

  .hover-shape-3 {
    right: 0;
    bottom: 35%;
  }

  .hover-shape-4 {
    right: 30%;
    bottom: 0;
  }

  .hover-shape-5 {
    left: 0;
    bottom: 30%;
  }

  .icon__wrapper {
    /* margin-bottom: 40px; */
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 20px;

    @media (max-width: 768px) and (min-width: 768px) {
      margin-bottom: 30px;
    }
    @media (max-width: 575px) {
      margin-bottom: 25px;
    }
    i {
      line-height: 1;
      font-size: 65px;
      transition: 0.35s ease-in-out;
      @media (max-width: 768px) and (min-width: 768px) {
        font-size: 50px;
      }
      &.violate {
        color: #8569ff;
      }
      &.yellow {
        color: #ffb129;
      }
      &.green {
        color: #18d379;
      }
    }
  }

  .button__wrapper {
    a {
      color: #c2cbd6;
      font-size: 24px;
      transition: 0.35s ease-in-out;
      @media (max-width: 768px) and (min-width: 768px) {
        font-size: 20px;
      }
      @media (max-width: 575px) {
        font-size: 22px;
      }
    }
  }

  &:hover {
    /* background: linear-gradient(
      90deg,
      rgba(1, 25, 79, 1) 0%,
      rgba(7, 88, 183, 1) 0%,
      rgba(3, 156, 253, 1) 100%
    ); */

    /* background-color: #eb4d4b; */

    background-image: linear-gradient(
      to right,
      rgb(29, 124, 203) 30%,
      rgb(25, 81, 184) 100%
    );
    box-shadow: rgba(22, 53, 76, 0.7) 0px 16px 57px 0px;

    /* background-color: #eb4d4b;
    
    &:before {
      opacity: 0.37;
    } */

    .hover-shape-1 {
      left: -40px;
      top: 20px;
    }
    .hover-shape-2 {
      right: 29%;
      top: -47px;
    }
    .hover-shape-3 {
      right: -27px;
      bottom: 35%;
    }
    .hover-shape-4 {
      right: 30%;
      bottom: -60px;
    }
    .hover-shape-5 {
      left: -35px;
      bottom: 30%;
    }
    .hover-shape {
      transform: rotate(0);
      opacity: 1;
    }

    h2 {
      margin-top: 20px;
    }

    h2,h3,
    p {
      color: #fff;
    }

    .icon__wrapper {
      i {
        color: #fff;
      }
    }

    .button__wrapper {
      a {
        color: #fff;
      }
    }
  }
`;

const shake = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(7px);
  }
  100% {
    transform: translateX(0);
  }
`;

const StyledButton = styled.div`
  .learn__more-btn {
    display: inline-flex;
    align-items: center;
    // color: ${themeGet('colors.link', '#fff')};
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0;
    position: relative;
    @media only screen and (max-width: 1360px) {
      font-size: 16px;
    }

    .btn_text {
      z-index: 1;
      margin-right: 12px;
      text-transform: uppercase;
    }

    .next_arrow {
      width: 40px;
      height: 2px;
      /* background-color: ${themeGet('colors.link', '#fff')}; */
      position: relative;

      &::before,
      &::after {
        content: '';
        display: block;
        width: 12px;
        height: 2px;
        border-radius: 4px;
        background-color: ${themeGet('colors.link', '#fff')};
        position: absolute;
        right: 0;
        transition: all 0.3s ease;
      }

      &::before {
        transform: rotate(-42deg);
        transform-origin: top right;
      }

      &::after {
        transform: rotate(42deg);
        transform-origin: 12px 1px;
      }
    }

    &:hover {
      .next_arrow {
        animation: ${shake} 1s infinite;
      }
    }
  }
 `;

const SectionHero = ({events}) => {
    const glideOptions = {
        type: 'carousel',
        perView: 4,
        gap: 20,
        autoplay: 4000,
        hoverpause: true,
        breakpoints: {
          1200: {
            perView: 3,
            gap: 10,
          },
          667: {
            perView: 2,
            gap: 5,
          },
          480: {
            perView: 2,
            gap: 2,
          },
          280: {
            perView: 1,
            gap: 0,
          },
        },
      };
    
      const [loading, setLoading] = useState(false);
    
      useEffect(() => {
        setLoading(true);
      }, [loading]);
    return (
        <section 
            className="w-full text-gray-700 bg-gray-100 body-font xs:mt-2 sm:mt-0 md:mt-0 lg:mt-24 bg-local" 
            style={{
                backgroundImage: "url('https://i.imgur.com/4dirS6W.png')", 
                backgroundRepeat: "no-repeat", 
                backgroundPosition: "top center", 
                backgroundSize: "cover"}}>
            <div 
                className="container mx-auto py-8 lg:min-h-3/4-renmark xl:min-h-renmark" 
            >
                <div className="flex flex-wrap text-left md:text-left">
                        <div className="w-full md:px-8 lg:px-2 md:w-4/12 lg:w-4/12 px-2 pb-4 lg:py-16 mt-16">
                            <h2
                                className="relative z-20 sm:text-lg md:text-1xl lg:text-3xl xl:text-4xl font-semibold leading-none text-gray-300 sm:text-left lg:text-left">
                                <FormattedMessage {...messages.companyTitle} /></h2> 
                            <p className="relative z-20 block mt-6 text-sm md:text-base text-gray-300 xl:text-xl sm:text-left lg:text-left">
                                <FormattedMessage {...messages.companyDescription} /></p>
                            <div className="relative flex mt-2 lg:mt-8">
                                <button
                                className="bg-blue-800 text-white active:bg-blue-600 hover:bg-blue-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
                                type="button"
                                >
                                More about us
                                </button>
                            </div>
                        </div>
                        
                        <div className="w-full md:px-8 md:w-8/12 lg:w-8/12 px-2 md:mt-16 xs:mt-0">
                            <CarouselArea>
                                {loading ? (
                                    <GlideCarousel
                                    carouselSelector="interior_carousel"
                                    options={glideOptions}
                                    nextButton={<span className="next_arrow" />}
                                    prevButton={<span className="prev_arrow" />}
                                    >
                                    
                                    
                                    <Fragment>
                                        {events.map((eventItem, index) => {
                                        
                                            const eventDate = <FormattedDate
                                            value={eventItem.date}
                                            day="numeric"
                                            month="long"
                                            year="numeric"
                                            // hour="numeric"
                                            // minute="2-digit"
                                            />;
                                            
                                            const time = moment.unix(eventItem.start);

                                            const eventTime = <FormattedDate
                                            value={time}
                                            hour="numeric"
                                            minute="2-digit"
                                            />;
                                            

                                            return(
                                                <GlideSlide key={`service-${index}`}>
                                                    <EventItem
                                                        city={
                                                            <h2 className="mt-2">{eventItem.city}</h2>
                                                        }
                                                        date={
                                                        <div>
                                                            <p>{eventDate}</p>
                                                            <p className="mt-2">{eventTime}</p>
                                                        </div>
                                                        }
                                                        
                                                        icon={
                                                        <img
                                                            className="company_logo"
                                                            src={eventItem.company.logo}
                                                            alt={eventItem.company.name}
                                                        />
                                                        }
                                                        
                                                        button={
                                                        <Link to="/" aria-label={`link-${index}`}>
                                                            <i className="flaticon-next" />
                                                        </Link>
                                                        }
                                                    />
                                                </GlideSlide>
                                            )                                        
                                        })}
                                    </Fragment>
                                                             
                                </GlideCarousel>
                            ) : (
                                <div>Loading ...</div>
                                // <CircleLoader>
                                //   <div className="circle"></div>
                                //   <div className="circle"></div>
                                // </CircleLoader>
                            )}
                              
                            </CarouselArea>
                          <div className="flex flex-wrap justify-end justify-self-end -mt-10">
                          <StyledButton>
                            <Link className="learn__more-btn text-gray-300 " to="/events">
                                <span className="btn_text">ALL EVENTS</span>
                                <span className="next_arrow bg-gray-300"></span>
                            </Link>
                        </StyledButton>
                                    </div>    
                            
                        </div>
                    </div>
                    
                

            </div>

        </section>    

        
        
            )
}

export default SectionHero



