import { Fragment } from 'react';
import TopBanner from '../../components/top-banner/TopBanner';
import Header from '../../components/header/Header';
import SecondaryNav from '../../components/secondary-nav/SecondaryNav';

function Home() {
  return (
    <Fragment>
      <TopBanner />
      <Header />
      <SecondaryNav />
    </Fragment>
  );
}

export default Home;
