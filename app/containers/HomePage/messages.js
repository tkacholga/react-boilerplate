/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

// export const year = new Date().getFullYear();
export const year = new Date().getFullYear();
export const fc = 'Renmark Financial Communications Inc. All Rights Reserved.';
export const footerCopyright = `© 1999 - ${year} ${fc}`;

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },

  misterMonsieur: {
    id: `${scope}.misterMonsieur`,
    defaultMessage: 'Mr.',
  },

  dropDownPosition1: {
    id: `${scope}.dropDownPosition1`,
    defaultMessage: 'Financial Advisor',
  },
  dropDownPosition2: {
    id: `${scope}.dropDownPosition2`,
    defaultMessage: 'Individual Investor',
  },
  dropDownPosition3: {
    id: `${scope}.dropDownPosition3`,
    defaultMessage: 'Licensed Broker',
  },

  manageAccountButton: {
    id: `${scope}.manageAccountButton`,
    defaultMessage: 'Manage My Account',
  },

  topMenuAbout: {
    id: `${scope}.topMenuAbout`,
    defaultMessage: 'About Renmark',
  },
  topMenuOurTeam: {
    id: `${scope}.topMenuOurTeam`,
    defaultMessage: 'Our Team',
  },
  topMenuSubscribe: {
    id: `${scope}.topMenuSubscribe`,
    defaultMessage: 'Subscribe',
  },
  topMenuCareers: {
    id: `${scope}.topMenuCareers`,
    defaultMessage: 'Careers',
  },
  topMenuSigninButton: {
    id: `${scope}.topMenuSigninButton`,
    defaultMessage: 'Sign In',
  },
  topMenuSignoutButton: {
    id: `${scope}.topMenuSignoutButton`,
    defaultMessage: 'Sign Out',
  },

  menuNews: {
    id: `${scope}.menuNews`,
    defaultMessage: 'Newsroom',
  },
  menuEvents: {
    id: `${scope}.menuEvents`,
    defaultMessage: 'Hosted Events',
  },
  menuServices: {
    id: `${scope}.menuServices`,
    defaultMessage: 'IR Services',
  },
  menuClients: {
    id: `${scope}.menuClients`,
    defaultMessage: 'Our Clients',
  },
  menuSocial: {
    id: `${scope}.menuSocial`,
    defaultMessage: 'Social Media',
  },
  menuContact: {
    id: `${scope}.menuContact`,
    defaultMessage: 'Contact Us',
  },

  companyTitle: {
    id: `${scope}.companyTitle`,
    defaultMessage: 'Renmark Financial Communications Inc.',
  },
  companyDescription: {
    id: `${scope}.companyDescription`,
    defaultMessage:
      'is a leading full service investor relations firm representing publicly traded companies listed on all major North American markets',
  },

  heroTitle: {
    id: `${scope}.heroTitle`,
    defaultMessage: 'Industry Defining IR Firm',
  },
  heroNumbers: {
    id: `${scope}.heroNumbers`,
    defaultMessage: '21 Years. 50,000 Relationships, Earned.',
  },
  heroSubtitle: {
    id: `${scope}.heroSubtitle`,
    defaultMessage:
      ' connects our clients with key players in the financial industry. We offer shareholders the most up-to-date information through our team of Investor Relations professionals.',
  },
  buttonContact: {
    id: `${scope}.buttonContact`,
    defaultMessage: 'Contact us',
  },
  buttonLearnMore: {
    id: `${scope}.buttonLearnMore`,
    defaultMessage: 'More about us',
  },
  seeAllEvents: {
    id: `${scope}.seeAllEvents`,
    defaultMessage: 'See all events',
  },

  categoryAll: {
    id: `${scope}.categoryAll`,
    defaultMessage: 'All sectors',
  },
  categoryEnergy: {
    id: `${scope}.categoryEnergy`,
    defaultMessage: 'Energy',
  },
  categoryFinance: {
    id: `${scope}.categoryFinance`,
    defaultMessage: 'Finance',
  },
  categoryLifeScience: {
    id: `${scope}.categoryLifeScience`,
    defaultMessage: 'Life Science',
  },
  categoryMining: {
    id: `${scope}.categoryMining`,
    defaultMessage: 'Mining',
  },

  allDates: {
    id: `${scope}.allDates`,
    defaultMessage: 'All dates',
  },
  todayDate: {
    id: `${scope}.todayDate`,
    defaultMessage: 'Today',
  },
  tomorrowDate: {
    id: `${scope}.tomorrowDate`,
    defaultMessage: 'Tomorrow',
  },
  pickDate: {
    id: `${scope}.pickDate`,
    defaultMessage: 'Pick date',
  },

  eventSearchTitle: {
    id: `${scope}.eventSearchTitle`,
    defaultMessage: 'Find an event near you',
  },
  eventSearchButton: {
    id: `${scope}.eventSearchButton`,
    defaultMessage: 'Search',
  },

  cardRegisterButton: {
    id: `${scope}.cardRegisterButton`,
    defaultMessage: 'Register',
  },
  cardMoreInfoButton: {
    id: `${scope}.cardMoreInfoButton`,
    defaultMessage: 'More Info',
  },
  cardAddToCalendarButton: {
    id: `${scope}.cardAddToCalendarButton`,
    defaultMessage: 'Add to Calendar',
  },

  eventPresentationText: {
    id: `${scope}.eventPresentationText`,
    defaultMessage: 'Corporate Presentation',
  },
  eventDetailsText: {
    id: `${scope}.eventDetailsText`,
    defaultMessage: 'Event Details',
  },

  eventsSection_ViewAllEventsButton: {
    id: `${scope}.eventsSection_ViewAllEventsButton`,
    defaultMessage: 'View all events',
  },

  clientsSection_SliderTitle: {
    id: `${scope}.clientsSection_SliderTitle`,
    defaultMessage: 'RENMARK Client Factsheets:',
  },
  clientsSection_SliderSeeAll: {
    id: `${scope}.clientsSection_SliderSeeAll`,
    defaultMessage: 'SEE ALL',
  },

  aboutSection_Title: {
    id: `${scope}.aboutSection_Title`,
    defaultMessage: 'About Renmark',
  },
  aboutSection_Title1: {
    id: `${scope}.aboutSection_Title1`,
    defaultMessage: 'WE ARE THE MISSING PIECE',
  },
  aboutSection_Title2: {
    id: `${scope}.aboutSection_Title2`,
    defaultMessage: 'IN YOUR BUSINESS',
  },

  aboutSection_Paragraph1: {
    id: `${scope}.aboutSection_Paragraph1`,
    defaultMessage: `A company's success in the financial markets depends greatly on its visibility, as well as its ability to communicate with the financial community.`,
  },
  aboutSection_Paragraph2: {
    id: `${scope}.aboutSection_Paragraph2`,
    defaultMessage:
      'At Renmark, our extensive suite of services provides our customers with great flexibility in choosing a service package congruent to their needs. We pride ourselves to effectively communicate Renmark client stories within the financial community and maintain a link between Company management and current and prospective shareholders.',
  },
  aboutSection_Paragraph3: {
    id: `${scope}.aboutSection_Paragraph3`,
    defaultMessage: `Our total commitment to quality, and excellence, allows the management of Renmark client companies to take care of their day-to-day affairs, with confidence. We are certain that this mindset will propel us to becoming North America's premiere investor relations firm serving small, mid and large cap companies.`,
  },
  aboutSection_Paragraph4: {
    id: `${scope}.aboutSection_Paragraph4`,
    defaultMessage: `We move forward into the future with the intent on continuing to explore new technologies, new mediums and innovative ways of reaching your target market on your behalf. It is this constant striving for excellence that has given and will continue to give Renmark the edge we need to remain one of North America's leading investor relations and corporate communications firms.`,
  },
  aboutSection_Paragraph5: {
    id: `${scope}.aboutSection_Paragraph5`,
    defaultMessage: 'Join Renmark and differentiate yourself from others.',
  },

  subscribeSection_Title: {
    id: `${scope}.subscribeSection_Title`,
    defaultMessage:
      'Subscribe to Renmark Financial Communications Inc. Newsletter',
  },
  subscribeSection_Subtitle: {
    id: `${scope}.subscribeSection_Subtitle`,
    defaultMessage:
      'To get the latest investor news delivered directly to your inbox',
  },
  subscribeSection_emailInputText: {
    id: `${scope}.subscribeSection_emailInputText`,
    defaultMessage: 'Email Address',
  },
  subscribeSection_buttonText: {
    id: `${scope}.subscribeSection_buttonText`,
    defaultMessage: 'Subscribe',
  },

  clientsSection_Title: {
    id: `${scope}.clientsSection_Title`,
    defaultMessage: 'Our clients',
  },
  clientsSection_Subtitle: {
    id: `${scope}.clientsSection_Subtitle`,
    defaultMessage: 'Click on logo to view factsheet',
  },
  clientsSection_SeeAllClientsButton: {
    id: `${scope}.clientsSection_SeeAllClientsButton`,
    defaultMessage: 'See all clients',
  },

  servicesSection_Title: {
    id: `${scope}.servicesSection_Title`,
    defaultMessage: 'Our Services',
  },
  servicesSection_Subitle: {
    id: `${scope}.servicesSection_Subtitle`,
    defaultMessage:
      'We offer services to small, medium, and large capitalization public companies traded on all North American exchanges.',
  },
  servicesSection_IRTitle: {
    id: `${scope}.servicesSection_IRTitle`,
    defaultMessage: 'Investor Relations',
  },
  servicesSection_IRSubtitle: {
    id: `${scope}.servicesSection_IRSubtitle`,
    defaultMessage:
      'Scale up with a solid team. Renmark reaches over 800 influential advisors per day throughout North America.',
  },
  servicesSection_IR_Institutional: {
    id: `${scope}.servicesSection_IR_Institutional`,
    defaultMessage: 'Institutional',
  },
  servicesSection_IR_Retail: {
    id: `${scope}.servicesSection_IR_Retail`,
    defaultMessage: 'Retail',
  },
  servicesSection_MediaTitle: {
    id: `${scope}.servicesSection_MediaTitle`,
    defaultMessage: 'Media Relations',
  },
  servicesSection_MediaSubtitle: {
    id: `${scope}.servicesSection_MediaSubtitle`,
    defaultMessage:
      'Our strong relationships with news organizations enable us to put your news in front of those who create it.',
  },
  servicesSection_Media_services: {
    id: `${scope}.servicesSection_Media_services`,
    defaultMessage: 'Media Services',
  },
  servicesSection_WebTitle: {
    id: `${scope}.servicesSection_WebTitle`,
    defaultMessage: 'Web Development',
  },
  servicesSection_Web_services: {
    id: `${scope}.servicesSection_Web_services`,
    defaultMessage: 'Web Services',
  },
  servicesSection_WebSubtitle: {
    id: `${scope}.servicesSection_WebSubtitle`,
    defaultMessage:
      'We can provide the link between internet technology, contemporary web style and financial expertise.',
  },

  footerAbout: {
    id: `${scope}.footerAbout`,
    defaultMessage: 'Quick Links',
  },
  footerSectionTitle: {
    id: `${scope}.footerSectionTitle`,
    defaultMessage: `Resources & Quick Links`,
  },
  footerCompanyText: {
    id: `${scope}.footerCompanyText`,
    defaultMessage:
      'Renmark Financial Communications Inc. is a full service investor relations firm representing small, medium and large cap public companies trading on all major North American exchanges.',
  },
  footerCompany: {
    id: `${scope}.footerCompany`,
    defaultMessage: 'Company',
  },
  footerClients: {
    id: `${scope}.footerClients`,
    defaultMessage: 'Clients',
  },
  footerServices: {
    id: `${scope}.footerServices`,
    defaultMessage: 'Services',
  },

  footerEvents: {
    id: `${scope}.footerEvents`,
    defaultMessage: 'Events & News',
  },
  footerUpcomingEvents: {
    id: `${scope}.footerUpcomingEvents`,
    defaultMessage: 'Upcoming Events',
  },
  footerRegister: {
    id: `${scope}.footerRegister`,
    defaultMessage: 'Register',
  },
  footerSignIn: {
    id: `${scope}.footerSignIn`,
    defaultMessage: 'Sign In',
  },

  footerContacts: {
    id: `${scope}.footerContacts`,
    defaultMessage: 'Contacts',
  },
  footerOurOffices: {
    id: `${scope}.footerOurOffices`,
    defaultMessage: 'Our Offices',
  },

  footerSocial: {
    id: `${scope}.footerSocial`,
    defaultMessage: 'Social',
  },
  footerSocialMedia: {
    id: `${scope}.footerSocialMedia`,
    defaultMessage: 'Social Media',
  },

  footerRenmarkOffices: {
    id: `${scope}.footerRenmarkOffices`,
    defaultMessage: 'Renmark Offices',
  },

  footerDisclaimerParagraph1: {
    id: `${scope}.footerDisclaimerParagraph1`,
    defaultMessage:
      'Renmark Financial Communications Inc. does not have any interest, directly or indirectly, in the clients listed on this website or its securities, or any right or intent to acquire such an interest.',
  },
  footerDisclaimerParagraph2: {
    id: `${scope}.footerDisclaimerParagraph2`,
    defaultMessage:
      'Financial Market Data powered by Source. All rights reserved. View the Source Terms of Use Quotes and other data delayed by 15 minutes for NYSE/NYSE-AMERICAN/NASDAQ/OTC, 20 minutes for TSX/TSX-V/CSE unless otherwise indicated.',
  },
  footerDisclaimerParagraph3: {
    id: `${scope}.footerDisclaimerParagraph3`,
    defaultMessage:
      'Renmark Financial is not a licensed broker-dealer, market maker, investment advisor, or underwriter. All information that we provide is for informational purposes only and should not be construed as an offer or solicitation of an offer to buy or sell securities. Furthermore, investing in such securities involves substantial risk of loss and investors should seek advice from financial professionals before investing.',
  },

  footerPolicy: {
    id: `${scope}.footerPolicy`,
    defaultMessage: 'Policy',
  },
  footerPrivacyLinksPrivacy: {
    id: `${scope}.footerPrivacyLinksPrivacy`,
    defaultMessage: 'Privacy',
  },
  footerPrivacyLinksDisclosure: {
    id: `${scope}.footerPrivacyLinksDisclosure`,
    defaultMessage: 'Disclosure',
  },
  footerPrivacyLinksTermsOfUse: {
    id: `${scope}.footerPrivacyLinksTermsOfUse`,
    defaultMessage: 'Terms of use',
  },
  footerPrivacyLinksSecurity: {
    id: `${scope}.footerPrivacyLinksSecurity`,
    defaultMessage: 'Security',
  },
  footerPrivacyLinksSiteMap: {
    id: `${scope}.footerPrivacyLinksSiteMap`,
    defaultMessage: 'Site map',
  },

  footerCopyrightText: {
    id: `${scope}.footerCopyrightText`,
    defaultMessage: `${footerCopyright}`,
  },
});
