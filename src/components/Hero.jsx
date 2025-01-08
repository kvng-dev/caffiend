const Hero = () => {
  return (
    <div>
      <h1>
        Coffee Tracking for Coffee{" "}
        <abbr title="An enthusiast or devotee">Fiends</abbr>!
      </h1>
      <div className="benefits-list">
        <h3 className="font-bolder">
          Try <span className="text-gradient"> Caffiend </span>and start...
        </h3>
        <p>✅ Tracking every coffee</p>
        <p>✅ Measuring your blood caffeine levels</p>
        <p>✅ Costing and quantifying your addiction</p>
      </div>
      <div className="card info-card">
        <div>
          <i className="fa-solid fa-circle-info"></i>
          <h3>Did you know...</h3>
        </div>
        <h5>That caffeine&apos;s half-life is about 5 hours?</h5>
        <p>
          This means that after 5 hours, half the caffeine u consumed is still
          in your system, keeping you alert longer! So if you drink a cup of
          caffeine with 200mg of caffeine, 5 hours later, you'll still have
          about 100mg of caffein in your system
        </p>
      </div>
    </div>
  );
};
export default Hero;
