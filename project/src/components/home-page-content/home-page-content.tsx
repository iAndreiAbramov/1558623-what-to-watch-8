import React from 'react';
import HomePageList from '../home-page-list/home-page-list';
import HomePageMore from '../home-page-more/home-page-more';
import HomePageTabs from '../home-page-tabs/home-page-tabs';
import PageFooter from '../page-footer/page-footer';

function HomePageContent(): JSX.Element {
  return (
    <div className="page-content">

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <HomePageTabs />
        <HomePageList />
        <HomePageMore />
      </section>

      <PageFooter />
    </div>
  );
}

export default HomePageContent;
