import user1 from '../../../assets/user1.png';
import user2 from '../../../assets/user2.png';
import user3 from '../../../assets/user3.png';
import './ReviewSection.scss';

const ReviewSection = () => {
  return (
    <div className="review-section">
      <div className="avatars">
        <img src={user1} alt="" />
        <img src={user2} alt="" />
        <img src={user3} alt="" />
      </div>
      <div className="note">
        “This is a game changer. I've been able to quit my day job, and run my
        own businesses because of this. Not only that, I've been able to thrive”
      </div>
      <div className="user">
        <p className="name">Joanna, 38</p>
        <p className="location">NEW YORK</p>
      </div>
    </div>
  );
};

export default ReviewSection;
