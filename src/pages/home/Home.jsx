import { Fragment } from 'react';
import TopBanner from '../../components/top-banner/TopBanner';
import Header from '../../components/header/Header';
import SecondaryNav from '../../components/secondary-nav/SecondaryNav';
import Ads from '../../components/ads/Ads';

function Home() {
  return (
    <Fragment>
      <TopBanner />
      <Header />
      <SecondaryNav />
      <div className="section-container">
        <Ads />
      </div>
    </Fragment>
  );
}

export default Home;
