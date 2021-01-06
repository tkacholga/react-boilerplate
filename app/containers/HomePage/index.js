/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import PageLayout from '../../components/UI/PageLayout';
import SectionHero from './components/SectionHero';
import Clients from './components/Clients';

class HomePage extends React.Component {
  state = {
    clients: [],
    events: [],
  };

  async getEvents() {
    try {
      const { data } = await axios.get(`http://34.197.2.103/api/events`);
      this.setState({
        events: data,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  async getCompanies() {
    try {
      const { data } = await axios.get(`http://34.197.2.103/api/companies`);
      this.setState({
        clients: data,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  async componentDidMount() {
    this.getEvents();
    this.getCompanies();
  }

  render() {
    const { clients, events } = this.state;

    if (!clients || _.isEmpty(clients.companies)) {
      return null;
    }

    if (!events || _.isEmpty(events.Events)) {
      return null;
    }

    let renderedEvents = [];

    if (events && events.Events) {
      const arr1 = events.Events;
      const arr2 = clients.companies;

      const eventsArray = arr1.map(it1 => {
        /* eslint no-param-reassign: "error" */

        // if (typeof it1.company !== undefined) {
        it1.company = arr2.find(it2 => it2.id === it1.company_id);
        // }

        return it1;
      });

      renderedEvents = eventsArray;
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>

        <PageLayout>
          <SectionHero events={renderedEvents} />

          <Clients clients={clients.companies} />
        </PageLayout>
      </React.Fragment>
    );
  }
}

export default HomePage;
