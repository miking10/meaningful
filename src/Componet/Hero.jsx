import heroImg from "../assets/heroImg.png";

const Hero = () => {
  return (
    <>
      <div id="hero">
        <div class="hero-intro">
          <h1>Mindfulness for Everyone, Anywhere</h1>
          <p>
            I'm a paragraph. click here to add your own lead and edit me. I'm a
            great place for you to tell a strory and let your users know a
            little more about you
          </p>
          <button class="btn">Try for Free</button>
        </div>
        <img src={heroImg} alt="" />
      </div>
    </>
  );
};

export default Hero;
