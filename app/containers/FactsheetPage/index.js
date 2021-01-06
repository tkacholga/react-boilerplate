/**
 *
 * FactsheetPage
 *
 */

import React from 'react';
import * as _ from 'lodash';
// import ReactMarkdown from 'react-markdown';
// styles
import styled from 'styled-components';

import axios from 'axios';
import {
  FormattedDate,
  // FormattedMessage
} from 'react-intl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import classNames from 'classnames';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { makeFactsheetDataSelector } from './selectors';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import { loadFactsheet } from './actions';
import reducer from './reducer';
import saga from './saga';
// import moment from 'moment/moment';

// icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faLongArrowAltRight,
//   faArrowDown,
//   faArrowUp,
// } from '@fortawesome/free-solid-svg-icons';

// components
// import { Container, Col, Row } from 'react-bootstrap';

// import Accordion from '../../components/Accordion';
// import Block from '../../components/lib/Block';
// import Button from '../../components/Button';
// import Display from '../../components/lib/Display';
// import Flex from '../../components/lib/Flex';
// import FlexItem from '../../components/lib/FlexItem';
// import NewsList from '../../components/NewsList';
import Banner from './components/Banner';
import PageLayout from '../../components/UI/PageLayout';
// import Tabs from '../../components/Tab/Tabs';
// import Text from '../../components/lib/Text';

// import Loader from '../../components/Loader';

// images
// import bg from '../../images/factsheetBG.jpg';

// chart
import TradingViewWidget from 'react-tradingview-widget'; // , { Themes }

/* eslint-disable react/prefer-stateless-function */
export class FactsheetPage extends React.Component {
  state = {
    stockData: [],
  };

  componentDidMount() {
    this.props.loadFactsheet(
      this.props.location.pathname,
      // + '?include=address,releases,events',
    );
    this.getStocks();
  }

  // componentDidUpdate(prevProps) {
  //   // update prop if our factsheet pathname has changed
  //   if (prevProps.location.pathname !== this.props.location.pathname)
  //     this.props.loadFactsheet(
  //       this.props.location.pathname
  //       // + '?include=address,releases,events',
  //     );
  // }

  async getStocks() {
    const clientId = this.props.location.pathname.substring(
      this.props.location.pathname.indexOf('/companies/') + 11,
    );
    const res = await axios.get(`http://34.197.2.103/api/quotes/${clientId}`);
    const { data } = await res;
    this.setState({ stockData: data });
  }

  render() {
    // const factsheet = { ...this.props.factsheetData };
    const factsheet = this.props.factsheetData;

    if (!factsheet || _.isEmpty(factsheet.company)) {
      return null;
    }

    if (!this.state.stockData) {
      return null;
    }

    let stockInfo;
    // let chart;

    if (this.state.stockData.length > 0) {
      const tickers = this.state.stockData;

      stockInfo = (
        <div>
          {tickers.map(ticker => (
            <div key={ticker.url} >
              <div className="flex items-center">
                <div className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
                  <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
                    <div className="w-full lg:w-1/5">
                      <div className="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-col">
                            <div className="text-xs uppercase font-light text-gray-500">
                              {ticker.company_symbol} on <b>{ticker.market_symbol}</b>
                            </div>
                            <div
className={classNames(
                              ticker.stock_quote.changes.charAt(0) === '-' && 'changeNegative',
                              ticker.stock_quote.changes.charAt(0) === '+' && 'changePositive',
                              "text-xl font-bold"
                            )}>                                          
                              {ticker.stock_quote.price}
                            </div>
                          </div>
                          {/* <svg className="stroke-current text-gray-500" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2">
                                          </path>
                                          <circle cx="9" cy="7" r="4">
                                          </circle>
                                          <path d="M23 21v-2a4 4 0 0 0-3-3.87">
                                          </path>
                                          <path d="M16 3.13a4 4 0 0 1 0 7.75">
                                          </path>
                                      </svg> */}
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/5">
                      <div className="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-col">
                            <div className="text-xs uppercase font-light text-gray-500">
                              Today's Change
                            </div>
                            <div
className={classNames(
                              ticker.stock_quote.changes.charAt(0) === '-' && 'changeNegative',
                              ticker.stock_quote.changes.charAt(0) === '+' && 'changePositive',
                              "text-xl font-bold"
                            )}>
                              {ticker.stock_quote.changes}
                            </div>
                          </div>
                          {/* <svg className="stroke-current text-gray-500" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12">
                                          </polyline>
                                      </svg> */}
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/5">
                      <div className="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-col">
                            <div className="text-xs uppercase font-light text-gray-500">
                              Volume
                            </div>
                            <div 
                              className={classNames(
                                ticker.stock_quote.changes.charAt(0) === '-' && 'changeNegative',
                                ticker.stock_quote.changes.charAt(0) === '+' && 'changePositive',
                                "text-xl font-bold",
                              )}>
                              {ticker.stock_quote.volume}
                            </div>
                          </div>
                          {/* <svg className="stroke-current text-gray-500" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                                          </path>
                                          <polyline points="15 3 21 3 21 9">
                                          </polyline>
                                          <line x1="10" x2="21" y1="14" y2="3">
                                          </line>
                                      </svg> */}
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/5">
                      <div className="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-col">
                            <div className="text-xs uppercase font-light text-gray-500">
                              52 Week Range (Low/Hi)
                            </div>
                            <div
                              className={classNames(
                                ticker.stock_quote.changes.charAt(0) === '-' && 'changeNegative',
                                ticker.stock_quote.changes.charAt(0) === '+' && 'changePositive',
                                "text-xl font-bold",
                              )}>
                              {ticker.stock_quote.week}
                            </div>
                          </div>
                          {/* <svg className="stroke-current text-gray-500" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                          <circle cx="12" cy="12" r="10">
                                          </circle>
                                          <polyline points="12 6 12 12 16 14">
                                          </polyline>
                                      </svg> */}
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/5">
                      <div className="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-col">
                            <div className="text-xs uppercase font-light text-gray-500">
                              Market Cap
                            </div>
                            <div className="text-xl font-bold">
                              {ticker.stock_quote.marketCap}
                            </div>
                          </div>
                          {/* <svg className="stroke-current text-gray-500" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12">
                                          </polyline>
                                      </svg> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className=" md:flex">
                            <div className="w-full md:w-1/5 px-2">
                                <div className="rounded-lg shadow-sm mb-4">
                                    <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                        <div className="px-3 pt-8 pb-10 text-center relative z-10">
                                            <h4 className="text-sm uppercase text-gray-500 leading-tight">{ticker.company_symbol} on <b>{ticker.market_symbol}</b></h4>
                                            <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">{ticker.stock_quote.price}</h3>
                                            <p className="text-xs text-green-500 leading-tight"></p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/5 px-2">
                                <div className="rounded-lg shadow-sm mb-4">
                                    <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                        <div className="px-3 pt-8 pb-10 text-center relative z-10">
                                            <h4 className="text-sm uppercase text-gray-500 leading-tight">Today's Change</h4>
                                            <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">{ticker.stock_quote.changes.split('(')[0]}</h3>
                                            <p className="text-xs text-red-500 leading-tight">▼ {ticker.stock_quote.changes.split(' ')[1]}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/5 px-2">
                                <div className="rounded-lg shadow-sm mb-4">
                                    <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                        <div className="px-3 pt-8 pb-10 text-center relative z-10">
                                            <h4 className="text-sm uppercase text-gray-500 leading-tight">Volume</h4>
                                            <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">{ticker.stock_quote.volume}</h3>
                                            <p className="text-xs text-green-500 leading-tight"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/5 px-2">
                                <div className="rounded-lg shadow-sm mb-4">
                                    <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                        <div className="px-3 pt-8 pb-10 text-center relative z-10">
                                            <h4 className="text-sm uppercase text-gray-500 leading-tight">52 Week Range (Low/Hi)</h4>
                                            <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">{ticker.stock_quote.week}</h3>
                                            <p className="text-xs text-green-500 leading-tight"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/5 px-2">
                                <div className="rounded-lg shadow-sm mb-4">
                                    <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                        <div className="px-3 pt-8 pb-10 text-center relative z-10">
                                            <h4 className="text-sm uppercase text-gray-500 leading-tight">Market Cap</h4>
                                            <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">{ticker.stock_quote.marketCap}</h3>
                                            <p className="text-xs text-green-500 leading-tight"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
          
                          </div>             */}
                </div>
              </div>

              {/* <Flex styles="margin-right: 10px;">
                <StyledFlexItem col={{ xs: 6 / 12, sm: 12 / 12, md: 12 / 12 }}>
                  <Flex>
                    <FlexItem col={{ xs: 12 / 12, sm: 3 / 12, md: 2 / 12 }}>
                      <StockLine>
                        {ticker.company_symbol} on <b>{ticker.market_symbol}</b>
                      </StockLine>
                    </FlexItem>
                    <FlexItem col={{ xs: 12 / 12, sm: 3 / 12, md: 3 / 12 }}>
                      <StockLine>Today's Change</StockLine>
                    </FlexItem>
                    <FlexItem col={{ xs: 12 / 12, sm: 2 / 12, md: 2 / 12 }}>
                      <StockLine>Volume</StockLine>
                    </FlexItem>
                    <FlexItem col={{ xs: 12 / 12, sm: 2 / 12, md: 3 / 12 }}>
                      <StockLine>52 Week Range (Low/Hi)</StockLine>
                    </FlexItem>
                    <FlexItem col={{ xs: 12 / 12, sm: 2 / 12, md: 2 / 12 }}>
                      <StockLine>Market Cap</StockLine>
                    </FlexItem>
                  </Flex>
                </StyledFlexItem>

                <FlexItemNumbers col={{ xs: 6 / 12, sm: 12 / 12, md: 12 / 12 }}>
                  <Flex>
                    <FlexItem col={{ xs: 12 / 12, sm: 3 / 12, md: 2 / 12 }}>
                      <StockLine
                        className={classNames(
                          ticker.stock_quote.changes.charAt(0) === '-' && 'changeNegative',
                          ticker.stock_quote.changes.charAt(0) === '+' && 'changePositive',
                        )}
                      >
                        {ticker.stock_quote.price}
                      </StockLine>
                    </FlexItem>
                    <FlexItem col={{ xs: 12 / 12, sm: 3 / 12, md: 3 / 12 }}>
                      <StockLine
                        className={classNames(
                          ticker.stock_quote.changes.charAt(0) === '-' && 'changeNegative',
                          ticker.stock_quote.changes.charAt(0) === '+' && 'changePositive',
                        )}
                      >
                        {ticker.stock_quote.changes}
                      </StockLine>
                    </FlexItem>
                    <FlexItem col={{ xs: 12 / 12, sm: 2 / 12, md: 2 / 12 }}>
                      <StockLine
                        className={classNames(
                          ticker.stock_quote.changes.charAt(0) === '-' && 'changeNegative',
                          ticker.stock_quote.changes.charAt(0) === '+' && 'changePositive',
                        )}
                      >
                        {ticker.stock_quote.volume}
                      </StockLine>
                    </FlexItem>
                    <FlexItem col={{ xs: 12 / 12, sm: 2 / 12, md: 3 / 12 }}>
                      <StockLine
                        className={classNames(
                          ticker.stock_quote.changes.charAt(0) === '-' && 'changeNegative',
                          ticker.stock_quote.changes.charAt(0) === '+' && 'changePositive',
                        )}
                      >
                        {ticker.stock_quote.week}
                      </StockLine>
                    </FlexItem>
                    <FlexItem col={{ xs: 12 / 12, sm: 2 / 12, md: 2 / 12 }}>
                      <StockLine>{ticker.stock_quote.marketCap}</StockLine>
                    </FlexItem>
                  </Flex>
                </FlexItemNumbers>
              </Flex> */}
            </div>
          ))}
        </div>
      );
    }

    let logo;
    let companyName;
    let companyOverview;

    // let tickers;
    const symbol = [];
    // let stockInfo;

    let included;
    let pressReleases;
    let sidebarAddress;
    let sidebarEvents;

    let leadsArray;
    let lead;
    let leadSlug;
    let second;
    let secondSlug;

    let accordion;

    if (factsheet && factsheet.company) {
      companyName = factsheet.company.name;
      companyOverview = factsheet.company.description;

      logo = <img src={factsheet.company.logo} alt={companyName} />;

      // lead = factsheet.company.contracts.lead.first_name;
      // leadsArray = factsheet.company.contracts.map(item => {
      //   lead = `${item.lead.first_name} ${item.lead.last_name}`;
      //   leadSlug = item.lead.slug;
      //   second = `${item.second.first_name} ${item.second.last_name}`;
      //   secondSlug = item.second.slug;
      // });

      // ******* symbol for Trading Chart
      {
        factsheet.company.tickers.forEach(function(ticker, key) {
          {
            ticker.market.map(market => {
              symbol.push(`${market.symbol}:${ticker.symbol}`);
            });
          }
        });
      }
      // ******* symbol for Trading Chart

      // stockInfo = (
      //   <div>
      //     {tickers.map(ticker => {
      //       let iconPercent = '';
      //       if (ticker.change_percent < 0) {
      //         iconPercent = <FontAwesomeIcon icon={faArrowDown} />;
      //       } else if (ticker.change_percent > 0) {
      //         iconPercent = <FontAwesomeIcon icon={faArrowUp} />;
      //       } else if (ticker.change_percent === 0) {
      //         iconPercent = '';
      //       }

      //       return (
      //         <Flex key={ticker.ticker_id} styles="margin-right: 10px;">
      //           <StyledFlexItem col={{ xs: 6 / 12, sm: 12 / 12, md: 12 / 12 }}>
      //             <Flex>
      //               <FlexItem col={{ xs: 12 / 12, sm: 3 / 12, md: 2 / 12 }}>
      //                 <StockLine>
      //                   {ticker.ticker} on <b>{ticker.exchange}</b>
      //                 </StockLine>
      //               </FlexItem>
      //               <FlexItem col={{ xs: 12 / 12, sm: 3 / 12, md: 3 / 12 }}>
      //                 <StockLine>Today's Change</StockLine>
      //               </FlexItem>
      //               <FlexItem col={{ xs: 12 / 12, sm: 2 / 12, md: 2 / 12 }}>
      //                 <StockLine>Volume</StockLine>
      //               </FlexItem>
      //               <FlexItem col={{ xs: 12 / 12, sm: 2 / 12, md: 3 / 12 }}>
      //                 <StockLine>52 Week Range (Low/Hi)</StockLine>
      //               </FlexItem>
      //               <FlexItem col={{ xs: 12 / 12, sm: 2 / 12, md: 2 / 12 }}>
      //                 <StockLine>Market Cap</StockLine>
      //               </FlexItem>
      //             </Flex>
      //           </StyledFlexItem>

      //           <FlexItemNumbers col={{ xs: 6 / 12, sm: 12 / 12, md: 12 / 12 }}>
      //             <Flex>
      //               <FlexItem col={{ xs: 12 / 12, sm: 3 / 12, md: 2 / 12 }}>
      //                 <StockLine
      //                   className={classNames(
      //                     ticker.change_percent < 0 && 'changeNegative',
      //                     ticker.change_percent > 0 && 'changePositive',
      //                   )}
      //                 >
      //                   {ticker.price}
      //                 </StockLine>
      //               </FlexItem>
      //               <FlexItem col={{ xs: 12 / 12, sm: 3 / 12, md: 3 / 12 }}>
      //                 <StockLine
      //                   className={classNames(
      //                     ticker.change_percent < 0 && 'changeNegative',
      //                     ticker.change_percent > 0 && 'changePositive',
      //                   )}
      //                 >
      //                   {iconPercent} {ticker.change} / {ticker.change_percent}
      //                 </StockLine>
      //               </FlexItem>
      //               <FlexItem col={{ xs: 12 / 12, sm: 2 / 12, md: 2 / 12 }}>
      //                 <StockLine
      //                   className={classNames(
      //                     ticker.change_percent < 0 && 'changeNegative',
      //                     ticker.change_percent > 0 && 'changePositive',
      //                   )}
      //                 >
      //                   {ticker.volume}
      //                 </StockLine>
      //               </FlexItem>
      //               <FlexItem col={{ xs: 12 / 12, sm: 2 / 12, md: 3 / 12 }}>
      //                 <StockLine
      //                   className={classNames(
      //                     ticker.change_percent < 0 && 'changeNegative',
      //                     ticker.change_percent > 0 && 'changePositive',
      //                   )}
      //                 >
      //                   {ticker.week_low} / {ticker.week_high}
      //                 </StockLine>
      //               </FlexItem>
      //               <FlexItem col={{ xs: 12 / 12, sm: 2 / 12, md: 2 / 12 }}>
      //                 <StockLine>{ticker.market_cap}</StockLine>
      //               </FlexItem>
      //             </Flex>
      //           </FlexItemNumbers>
      //         </Flex>
      //       );
      //     })}
      //   </div>
      // );

      // // ******* symbol for Trading Chart
      // tickers.forEach(
      //   (item, i) => (symbol[i] = item.exchange + ':' + item.ticker),
      // );

      // // ******* symbol for Trading Chart

      // // ******* Releases *************

      // included = factsheet.included;

      // const items = included.filter(item => {
      //   return item.type === 'releases';
      // });

      // const itemsTotal = items.slice(0, 5).map(item => {
      //   if (item.type === 'releases') {
      //     return item;
      //   }
      // });

      // pressReleases = (
      //   <div>
      //     <H4>Press Releases</H4>
      //     <NewsList type="list" news={itemsTotal} />
      //   </div>
      // );

      // // ******* Releases *************

      // // ******* Contact Information *************
      // const address = included.filter(item => {
      //   return item.type === 'addresses';
      // });

      // sidebarAddress = (
      //   <div>
      //     {address.map(item => (
      //       <InfoBlock key={item.id}>
      //         <li className="active">
      //           <FontAwesomeIcon
      //             icon={faLongArrowAltRight}
      //             className="icon-arrow-right"
      //           />{' '}
      //           Headquarters
      //         </li>
      //         <p>{item.attributes.address}</p>
      //         <p>Toronto, Ontario</p>
      //         <p>Canada, {item.attributes.postal_code}</p>
      //         <p>Tel: 416-947-1212</p>
      //         <p>Fax: 416-367-4681</p>
      //       </InfoBlock>
      //     ))}
      //     <InfoBlock>
      //       {/* <li>
      //           <FontAwesomeIcon
      //             icon={faLongArrowAltRight}
      //             className="icon-arrow-right"
      //           />{' '}
      //           Email
      //         </li>
      //         <p>
      //           <a href="mailto:info@renmarkfinancial.com">Send a message</a>
      //         </p> */}
      //       <li>
      //         <FontAwesomeIcon
      //           icon={faLongArrowAltRight}
      //           className="icon-arrow-right"
      //         />{' '}
      //         Website
      //       </li>
      //       <p>
      //         <a
      //           // target="_blank"
      //           href="#"
      //         >
      //           Visit website
      //         </a>
      //       </p>
      //       <li>
      //         <FontAwesomeIcon
      //           icon={faLongArrowAltRight}
      //           className="icon-arrow-right"
      //         />{' '}
      //         For more information...
      //       </li>
      //       <LeadSecond>
      //         <StyledLink to={leadSlug}>
      //           <span>Lead: </span>
      //           {lead}
      //         </StyledLink>
      //       </LeadSecond>
      //       <LeadSecond>
      //         <StyledLink to={secondSlug}>
      //           <span>Second: </span>
      //           {second}
      //         </StyledLink>
      //       </LeadSecond>
      //       <li>
      //         <FontAwesomeIcon
      //           icon={faLongArrowAltRight}
      //           className="icon-arrow-right"
      //         />{' '}
      //         Leave a Message
      //       </li>

      //       <Form
      //       // method="POST"
      //       >
      //         <Textarea name="message" />
      //         <div>
      //           <TextareaInput type="submit" value="Submit" />
      //         </div>
      //       </Form>
      //     </InfoBlock>
      //   </div>
      // );
      // // ******* Contact Information *************

      // // ******* Events *************

      // const events = included.filter(item => {
      //   return item.type === 'events';
      // });

      // const eventsTotal = events.slice(0, 5).map(item => {
      //   if (item.type === 'events') {
      //     return item;
      //   }
      // });
      // let date;

      // if (eventsTotal.length > 0) {
      //   sidebarEvents = (
      //     <Widget>
      //       <H4>Events</H4>
      //       <EventsBlock>
      //         <EventsWrapper>
      //           {eventsTotal.map(event => {
      //             date = moment(date);
      //             return (
      //               <Flex key={event.id}>
      //                 <Link to={`/events/${event.id}`}>
      //                   <FlexItem padding="0.3rem" styles="color: #06336d">
      //                     <EventText>{event.attributes.title.en}</EventText>
      //                     <div>
      //                       <FormattedDate
      //                         value={date}
      //                         day="numeric"
      //                         month="long"
      //                         // year="numeric"
      //                         hour="numeric"
      //                         minute="2-digit"
      //                       />
      //                     </div>
      //                   </FlexItem>
      //                 </Link>
      //               </Flex>
      //             );
      //           })}
      //         </EventsWrapper>
      //       </EventsBlock>
      //     </Widget>
      //   );
      // }

      // ******* Events *************

      // // ******* Data for Accordion *************
      // const companyData = [
      //   {
      //     title: 'COMPANY OVERVIEW',
      //     content: <ReactMarkdown source={companyOverview} />,
      //   },
      //   {
      //     title: 'MANAGEMENT',
      //     content: `Lorem ipsum dolor sit amet,
      //             consectetur adipiscing elit,
      //             sed do eiusmod tempor incididunt
      //             ut labore et dolore magna aliqua.
      //             Ut enim ad minim veniam, quis
      //             nostrud exercitation ullamco laboris
      //             nisi ut aliquip ex ea commodo consequat.
      //             Duis aute irure dolor in reprehenderit
      //             in voluptate velit esse cillum dolore
      //             eu fugiat nulla pariatur. Excepteur
      //             sint occaecat cupidatat non proident,
      //             sunt in culpa qui officia deserunt
      //             mollit anim id est laborum.`,
      //   },
      //   {
      //     title: 'BOARD OF DIRECTORS',
      //     content: `Lorem ipsum dolor sit amet,
      //         consectetur adipiscing elit,
      //         sed do eiusmod tempor incididunt
      //         ut labore et dolore magna aliqua.
      //         Ut enim ad minim veniam, quis
      //         nostrud exercitation ullamco laboris
      //         nisi ut aliquip ex ea commodo consequat.
      //         Duis aute irure dolor in reprehenderit
      //         in voluptate velit esse cillum dolore
      //         eu fugiat nulla pariatur. Excepteur
      //         sint occaecat cupidatat non proident,
      //         sunt in culpa qui officia deserunt
      //         mollit anim id est laborum.`,
      //   },
      // ];
      // // ******* Data for Accordion *************

      // accordion = <Accordion data={companyData} />;
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>{`${companyName} | Factsheet`}</title>
          <meta
            name="Renmark Financial Communications Inc"
            content="This is the factsheet page"
          />
        </Helmet>
        <PageLayout>
          {/* <Header>
            <Wrapper>
              <PageTitle>{companyName}</PageTitle>
            </Wrapper>
          </Header> */}

          <Banner company={companyName} />

          <div className="container mx-auto py-8 ">
              <div className="flex flex-wrap text-left md:text-left">
                {/* Left side */}
                <div className="w-full md:px-8 lg:px-2 md:w-9/12 px-2 pb-4 lg:py-16 mt-16">
                  {stockInfo}

                  <div
                    className="rounded shadow-xl overflow-hidden w-full md:flex" 
                    // style={{maxWidth: "900px"}}
                  >
                    {/* <div className="flex w-full md:w-1/2 px-5 pb-4 pt-8 bg-indigo-500 text-white items-center">
                    <TradingViewWidget
                                  symbol="TSX:CG"
                                  locale="en"
                                  autosize
                                  timezone="America/Toronto"
                                  style="2"
                                  // interval="1D"
                                  hide_top_toolbar={true}
                                  withdateranges={true}
                                />
                    </div> */}
                    <div className="flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 items-center">
                      <div className="w-full">
                        <h3 className="text-lg font-semibold leading-tight text-gray-800">
                          {companyName}
                        </h3>
                        <h6 className="text-sm leading-tight mb-2">
                          {' '}
                          Aug 2nd 4:00pm AEST
                        </h6>
                        <div className="flex w-full items-end mb-6">
                          <span className="block leading-none text-3xl text-gray-800">
                            0
                          </span>
                          <span className="block leading-5 text-sm ml-4 text-green-500" />
                        </div>
                        <div className="flex w-full text-xs">
                          <div className="flex w-5/12">
                            <div className="flex-1 pr-3 text-left font-semibold">
                              Open
                            </div>
                            <div className="flex-1 px-3 text-right">0</div>
                          </div>
                          <div className="flex w-7/12">
                            <div className="flex-1 px-3 text-left font-semibold">
                              Market Cap
                            </div>
                            <div className="flex-1 pl-3 text-right">0</div>
                          </div>
                        </div>
                        <div className="flex w-full text-xs">
                          <div className="flex w-5/12">
                            <div className="flex-1 pr-3 text-left font-semibold">
                              High
                            </div>
                            <div className="px-3 text-right">0</div>
                          </div>
                          <div className="flex w-7/12">
                            <div className="flex-1 px-3 text-left font-semibold">
                              P/E ratio
                            </div>
                            <div className="pl-3 text-right">0</div>
                          </div>
                      </div>
                      <div className="flex w-full text-xs">
                        <div className="flex w-5/12">
                          <div className="flex-1 pr-3 text-left font-semibold">Low</div>
                          <div className="px-3 text-right">0</div>
                        </div>
                        <div className="flex w-7/12">
                          <div className="flex-1 px-3 text-left font-semibold">Dividend yield</div>
                          <div className="pl-3 text-right">0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="w-full md:px-8 md:w-3/12 px-2 md:mt-16 xs:mt-0">

              </div>
              </div>
          </div>
        </PageLayout>
      </React.Fragment>
    );
  }
}

FactsheetPage.propTypes = {
  factsheetData: PropTypes.object,
  loadFactsheet: PropTypes.func,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  factsheetData: makeFactsheetDataSelector(),
  locale: makeSelectLocale(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadFactsheet: slug => {
      dispatch(loadFactsheet(slug)); // change to slug
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'factsheet', reducer });
const withSaga = injectSaga({ key: 'factsheet', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FactsheetPage);

const LoadDiv = styled.div`
  text-align: center;
  margin-top: 20px;

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
