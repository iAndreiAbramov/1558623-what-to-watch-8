import React from 'react';
import HiddenComponent from '../hidden-component/hidden-component';
import HomePageContent from '../home-page-content/home-page-content';
import HomePagePromo from '../home-page-promo/home-page-promo';

function HomePage(): JSX.Element {
  return (
    <>
      <HiddenComponent />
      <HomePagePromo />
      <HomePageContent />
    </>
  );
}

export default HomePage;
