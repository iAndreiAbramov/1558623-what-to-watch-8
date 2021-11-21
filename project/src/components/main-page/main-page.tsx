import React from 'react';
import { useSelector } from 'react-redux';
import { FetchStatus, NotificationMessage } from '../../const';
import { getFilmsGetStatus, getPromoGetStatus } from '../../store/selectors';
import HiddenComponent from '../hidden-component/hidden-component';
import MainPageContent from '../main-page-content/main-page-content';
import MainPagePromo from '../main-page-promo/main-page-promo';
import { notifyError } from '../../utils/project-utils';
import SpinnerBig from '../spinner-big/spinner-big';

function MainPage(): JSX.Element {
  const promoGetStatus = useSelector(getPromoGetStatus);
  const filmsGetStatus = useSelector(getFilmsGetStatus);

  if (promoGetStatus === FetchStatus.Error || filmsGetStatus === FetchStatus.Error) {
    notifyError(NotificationMessage.ConnectionError);
  }

  return (
    <>
      {
        promoGetStatus === FetchStatus.InProgress
        || filmsGetStatus === FetchStatus.InProgress
        && <SpinnerBig />
      }
      {
        promoGetStatus === FetchStatus.Success
        && filmsGetStatus === FetchStatus.Success
        &&
        <>
          <HiddenComponent />
          <MainPagePromo />
          <MainPageContent />
        </>
      }
    </>
  );
}

export default MainPage;
