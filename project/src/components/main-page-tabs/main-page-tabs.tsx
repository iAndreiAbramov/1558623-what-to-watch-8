import React from 'react';
import MainPageTab from '../main-page-tab/main-page-tab';

type HomePageTabsTypes = {
  tabsList: string[],
}

function MainPageTabs(props: HomePageTabsTypes): JSX.Element {
  const { tabsList } = props;

  const tabs = tabsList.map((name) => (
    <MainPageTab key={ name } name={ name } />
  ));

  return (
    <ul className="catalog__genres-list">
      { tabs }
    </ul>
  );
}

export default MainPageTabs;
