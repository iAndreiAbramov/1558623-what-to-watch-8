import React from 'react';
import HiddenComponent from '../hidden-component/hidden-component';
import MainPageContent from '../main-page-content/main-page-content';
import MainPagePromo from '../main-page-promo/main-page-promo';

function MainPage(): JSX.Element {
  return (
    <>
      <HiddenComponent />
      <MainPagePromo />
      <MainPageContent />
    </>
  );
}

export default MainPage;
