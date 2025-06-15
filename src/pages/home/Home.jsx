import { Fragment } from 'react';
import TopBanner from '../../components/top-banner/TopBanner';
import Header from '../../components/header/Header';
import SecondaryNav from '../../components/secondary-nav/SecondaryNav';
import Ads from '../../components/ads/Ads';
import ad1 from '../../assets/images/ads/shatel-ad.gif';
import ad2 from '../../assets/images/ads/arizzo-ad.gif';
import ad3 from '../../assets/images/rodeo-ad.gif';
import ad4 from '../../assets/images/systan-ad.gif';
import ad5 from '../../assets/images/fly-today-ad.gif';
import ad6 from '../../assets/images/zoomit-meetup-ad.gif';
import EditorsChoice from '../../components/editors-choice/EditorsChoice';
import LatestVideos from '../../components/latest-videos/LatestVideos';
import MostVisited from '../../components/most-visited/MostVisited';
import BuyingGuides from '../../components/buying-guides/BuyingGuides';
import Reviews from '../../components/reviews/Reviews';

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
        <section className="middle-contents">
          <div className="section-container">
            <div className="right-side">
              <LatestVideos />
              <Ads
                firstSrc={ad3}
                firstAlt={'rodeo exchange advertisement'}
                secondSrc={ad4}
                secondAlt={'systan.com advertisement'}
              />
              <MostVisited />
              <Ads
                firstSrc={ad5}
                firstAlt={'fly today advertisement'}
                secondSrc={ad6}
                secondAlt={'zoomit meetup advertisement'}
              />
              <BuyingGuides />
              <Reviews />
            </div>
            <div className="left-side"></div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default Home;
