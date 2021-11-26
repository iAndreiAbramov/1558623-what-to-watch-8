import React from 'react';
import HiddenComponent from '../hidden-component/hidden-component';
import MyListContent from '../my-list-content/my-list-content';
import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';

function MyListPage(): JSX.Element {
  return (
    <>
      <HiddenComponent />
      <div className="user-page">
        <PageHeader />
        <MyListContent />
        <PageFooter />
      </div>
    </>
  );
}

export default MyListPage;
