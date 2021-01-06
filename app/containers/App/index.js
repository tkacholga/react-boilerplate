/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, useLocation } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import 'assets/main.css';

import HomePage from 'containers/HomePage/Loadable';
import FactsheetPage from 'containers/FactsheetPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  /* max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column; */
`;

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
    // eslint-disable-next-line no-unused-vars
    // const sticky = new Sticky('[data-sticky]');
  });

  return (
    <React.Fragment>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/forgot-password" component={ResetPasswordPage} />
          <Route exact path="/sign-in" component={SigninPage} />

          <Route exact path="/companies" component={ClientsPage} /> */}
        <Route exact path="/companies/:slug" component={FactsheetPage} />
        {/* <Route exact path="/events" component={EventsIndexPage} />
          <Route exact path="/events/:id" component={EventsShowPage} />
          <Route exact path="/newsroom" component={NewsIndexPage} />
          <Route exact path="/articles" component={ArticlesIndexPage} />
          <Route exact path="/posts" component={PostsIndexPage} />
          <Route exact path="/posts/:id" component={PostsShowPage} />
          <Route exact path="/releases" component={ReleasesIndexPage} />
          <Route exact path="/releases/:id" component={ReleasesShowPage} />

          <Route exact path="/investor-relations" component={InvestorPage} />
          <Route exact path="/media-services" component={MediaPage} />
          <Route exact path="/web-development" component={WebPage} />

          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/team" component={OurTeamIndexPage} />
          <Route exact path="/team/:id" component={OurTeamShowPage} />
          <Route exact path="/subscribe" component={SubscribePage} />
          <Route exact path="/careers" component={CareersPage} />
          <Route exact path="/ourcontact" component={ContactPage} />
          <Route exact path="/services" component={ServicesPage} /> */}

        {/* <Route path="/:slug" component={Page} /> */}
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      {/* <GlobalStyle /> */}
    </React.Fragment>
  );
}
