import React from 'react';
import HomePageTab from '../home-page-tab/home-page-tab';

type HomePageTabsTypes = {
  tabsList: string[],
}

function HomePageTabs(props: HomePageTabsTypes): JSX.Element {
  const { tabsList } = props;

  const tabs = tabsList.map((name) => (
    <HomePageTab key={ name } name={ name } />
  ));

  return (
    <ul className="catalog__genres-list">
      { tabs }
    </ul>
  );
}

export default HomePageTabs;
