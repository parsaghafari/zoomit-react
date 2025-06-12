import { Fragment } from 'react';
import TopBanner from '../../components/top-banner/TopBanner';
import Header from '../../components/header/Header';
import SecondaryNav from '../../components/secondary-nav/SecondaryNav';
import Ads from '../../components/ads/Ads';
import ad1 from '../../assets/images/ads/shatel-ad.gif';
import ad2 from '../../assets/images/ads/arizzo-ad.gif';
import EditorsChoice from '../../components/editors-choice/EditorsChoice';

function Home() {
  return (
    <Fragment>
      <TopBanner />
      <Header />
      <main>
        <SecondaryNav />
        <div className="section-container">
          <Ads
            firstSrc={ad1}
            secondSrc={ad2}
            firstAlt={'shatel advertisement gif'}
            secondAlt={'arizzo advertisement gif'}
          />
        </div>
        <EditorsChoice />
      </main>
    </Fragment>
  );
}

export default Home;
