import user1 from '../../../assets/user1.png';
import user2 from '../../../assets/user2.png';
import user3 from '../../../assets/user3.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ReviewSection.scss';

const ReviewSection = () => {
  return (
    <div className="review-section">
      <div className="avatars">
        <LazyLoadImage
          className="user-inactive"
          src={user1}
          alt=""
          effect="blur"
        />
        <LazyLoadImage
          className="user-active"
          src={user2}
          alt=""
          effect="blur"
        />
        <LazyLoadImage
          className="user-inactive"
          src={user3}
          alt=""
          effect="blur"
        />
      </div>
      <div className="note">
        “This is a game changer. I've been able <br /> to quit my day job, and
        run my own <br />
        businesses because of this. Not only <br />
        that, I've been able to thrive”
      </div>
      <div className="user">
        <p className="name">Joanna, 38</p>
        <p className="location">NEW YORK</p>
      </div>
    </div>
  );
};

export default ReviewSection;
