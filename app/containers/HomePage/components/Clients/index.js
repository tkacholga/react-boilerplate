import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaThumbsDown } from 'react-icons/fa';

import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import GlideCarousel from 'components/common/GlideCarousel';
import GlideSlide from 'components/common/GlideCarousel/glideSlide';

// translation
import { FormattedMessage } from 'react-intl';
import messages from 'containers/HomePage/messages';

const GalleryWrapper = styled.div`
  padding: 0;
  /* background: linear-gradient(#ffffff, #fbfafe); */
  display: flex;
  @media only screen and (max-width: 1440px) {
    padding: 0;
  }
  @media only screen and (max-width: 767px) {
    padding: 0;
    flex-wrap: wrap;

    .learn__more-btn {
      margin-top: 25px;
    }
  }

  .align_center_box {
    text-align: center;
  }

  .glide {
    position: relative;

    .glide__controls {
      margin: 0;

      .glide__prev--area,
      .glide__next--area {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${themeGet('colors.primary', '#0758b7')};
        position: absolute;
        top: calc(50% - 20px);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease;
        @media only screen and (max-width: 767px) {
          opacity: 1;
          visibility: visible;
        }
        i {
          font-size: 16px;
          line-height: 1;
          font-weight: 700;
        }
      }

      .glide__prev--area {
        left: 0;
        /* left: 30px; */
        box-shadow: -1px 2px 0 rgba(0, 0, 0, 0.1);
      }

      .glide__next--area {
        right: 10px;
        /* right: 30px; */
        box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
      }
    }

    &:hover {
      .glide__controls {
        .glide__prev--area,
        .glide__next--area {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
`;

const GalleryCard = styled.div`
  position: relative;

  a {
    display: block;
    overflow: hidden;
    position: relative;
    /* box-shadow: 0 30px 70px 10px rgba(25, 25, 25, 0.19);
    @media only screen and (max-width: 767px) {
      box-shadow: 0 5px 30px 5px rgba(25, 25, 25, 0.19);
    } */

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 130px;
      position: absolute;
      bottom: 0;
      left: 0;
      /* background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.82)); */
      transition: all 0.3s ease;
    }

    img {
      transform: scale(1);
      transition: all 0.3s ease;
    }

    &:hover {
      &::after {
        height: 70%;
      }

      img {
        transform: scale(1.03);
      }

      .read_more__btn {
        color: ${themeGet('colors.primary', '#0758b7')};

        .arrow {
          width: 28px;
          left: calc(100% + 10px);
          border-radius: 4px;
          background-color: ${themeGet('colors.primary', '#0758b7')};

          &::before {
            transform: rotate(-42deg);
            transform-origin: top right;
            background-color: ${themeGet('colors.primary', '#0758b7')};
          }

          &::after {
            transform: rotate(42deg);
            transform-origin: 10px 2px;
            background-color: ${themeGet('colors.primary', '#0758b7')};
          }
        }
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
    color: ${themeGet('colors.link', '#06336d')};
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
      background-color: ${themeGet('colors.link', '#06336d')};
      position: relative;

      &::before,
      &::after {
        content: '';
        display: block;
        width: 12px;
        height: 2px;
        border-radius: 4px;
        background-color: ${themeGet('colors.link', '#06336d')};
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

const LoadingWrapper = styled.div`
  text-align: center;

  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;

  @keyframes bottom-top {
    0% {
      height: 0;
      opacity: 0;
    }
    50% {
      height: 30px;
      opacity: 1;
    }
    100% {
      height: 0;
      opacity: 0;
    }
  }
`;

const Clients = ({ clients }) => {
  const glideOptions = {
    type: 'carousel',
    startAt: 6,
    perView: 6,
    gap: 5,

    breakpoints: {
      1200: {
        perView: 4,
      },
      991: {
        perView: 3,
      },
      500: {
        perView: 2,
      },
    },
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [loading]);

  return (
    <div>
      <div className="flex flex-col text-left md:flex-row md:text-center mb-4">
        {/* <div className="w-1/4 bg-gray-500 ">RENMARK Client Factsheets</div> */}
        <div className="w-full xs:w-full md:w-1/4 lg:w-1/6 px-2 pt-16 pb-4 md:py-16 lg:py-16 relative">
          <div className="flex items-center justify-center ">
            <h2 className="text-dark text-lg font-bold">
              RENMARK Client Factsheets
            </h2>
          </div>
        </div>
        <div className="w-full xs:w-full md:w-1/2 lg:w-3/4 px-2 relative xs:py-2 md:py-12 lg:py-12 ">
          {/* <div className="h-12 text-sm text-grey-dark flex items-center justify-center"> */}
          <GalleryWrapper>
            <GlideCarousel
              carouselSelector="gallery_carousel"
              options={glideOptions}
              nextButton={
                <FaArrowRight style={{ color: 'white' }} />
                // <Button
                //   icon={<GrFormNext color="white" />}
                //   aria-label="Next"
                //   variant="fab"
                // />
              }
              prevButton={
                <FaArrowLeft style={{ color: 'white' }} />
                //     <Button
                //       icon={<FaArrowLeft style={{ color: 'white' }} />}
                //       aria-label="Prev"
                //       variant="fab"
                //   />
              }
            >
              <Fragment>
                {clients.map(item => (
                  <GlideSlide key={`gallery_key${item.id}`}>
                    <GalleryCard>
                      <Link to={`/companies/${item.id}`}>
                        <img src={item.logo} alt={item.name} />
                      </Link>
                    </GalleryCard>
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          </GalleryWrapper>

          {/* </div> */}
        </div>
        <div className="w-full xs:w-full md:w-1/4 lg:w-1/6 px-2 pt-4 pb-12 md:py-16 lg:py-16 relative">
          <div className="flex items-center justify-center">
            <StyledButton>
              <Link className="learn__more-btn" to="/companies">
                <span className="btn_text">
                  <FormattedMessage {...messages.clientsSection_SliderSeeAll} />
                </span>
                <span className="next_arrow" />
              </Link>
            </StyledButton>

            {/* <h2 className="text-dark text-lg font-bold">SEE ALL</h2> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
