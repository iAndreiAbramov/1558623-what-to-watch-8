import React from 'react';
import { getFilmsData } from '../../store/selectors';
import { useSelector } from 'react-redux';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';
import HiddenComponent from '../hidden-component/hidden-component';
import HomePagePromo from '../home-page-promo/home-page-promo';
import HomePageContent from '../home-page-content/home-page-content';

function HomePage(): JSX.Element {
  const filmsData = useSelector(getFilmsData);
  console.log(filmsData);

  return (
    <>
      <HiddenComponent />
      <HomePagePromo />
      <HomePageContent />
    </>
  );
}

export default HomePage;
