import { SubHeading } from '../../components'
import { images } from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutUs app__bg flex__center section__padding" id="about">
    <div className="app__aboutUs-overlay flex__center">
      <img src={images.G} alt="g_letter" />
    </div>

    <div className="app__aboutUs-content flex__center">
      <div className="app__aboutUs-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button">Know more</button>
      </div>

      <div className="app__aboutUs-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutUs-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button">Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
