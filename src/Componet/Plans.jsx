const plans = () => {
  return (
    <div id="plans">
      <div className="Our-plans">
        <h2>Our Plans</h2>
        <p>choose a plan and .....</p>
      </div>
      <div className="box">
        <div className="plans-card">
          <h3>Monthly plan</h3>
          <hr />
          <p className="cancel">cancel anytime</p>
          <div>
            <span>$</span>
            <p>29</p>
          </div>
          <a href="#">
            <button className="see-more">See More</button>
          </a>
        </div>
        <div className="plans-card">
          <h3>Monthly plan</h3>
          <hr />
          <p className="cancel">cancel anytime</p>
          <div>
            <span>$</span>
            <p>29</p>
          </div>
          <a href="#">
            <button className="see-more">See More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default plans;
