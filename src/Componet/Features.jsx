import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";

const Features = () => {
  return (
    <div>
      <div id="experience">
        <div class="Centered-heading">
          <h2>The Breez Experience</h2>
          <p>
            enjoy guided mindfulness and meditation classes online. <br />
            practice with us as much as you want on any digital device
          </p>
        </div>
        <div class="column-grid">
          <div>
            <img src={image1} alt="" />
            <h3>A Global Netwok of Teachers</h3>
            <p>
              I'm a paragraph. click here to add your own lead and edit me. I'm
              a great place for you to tell a strory and let your users know a
              little more about you
            </p>
          </div>
          <div>
            <img src={image2} alt="" />
            <h3>Differnt Style for All Ages and Levels</h3>
            <p>
              I'm a paragraph. click here to add your own lead and edit me. I'm
              a great place for you to tell a strory and let your users know a
              little more about you
            </p>
          </div>
          <div>
            <img src={image3} alt="" />
            <h3>Livestream classes</h3>
            <p>
              I'm a paragraph. click here to add your own lead and edit me. I'm
              a great place for you to tell a strory and let your users know a
              little more about you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
