import DownloadSection from '../../components/landing-one/download-section/DownloadSection';
import Footer from '../../components/landing-one/footer/Footer';
import Header from '../../components/landing-one/header/Header';
import HowItWorks from '../../components/landing-one/howitworks/HowItWorks';
import ReviewSection from '../../components/landing-one/review-section/ReviewSection';

const LandingPage1 = () => {
  return (
    <div>
      <Header />
      <HowItWorks />
      <ReviewSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default LandingPage1;
