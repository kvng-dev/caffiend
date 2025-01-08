import {
  calculateCurrentCaffeineLevel,
  coffeeConsumptionHistory,
  getCaffeineAmount,
  timeSinceConsumption,
} from "../utils";

const History = () => {
  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-timeline"></i>
        <h2>History</h2>
      </div>

      <p style={{ margin: "20px 0" }}>
        <i>Hover for more information!</i>
      </p>
      <div className="coffee-history">
        {Object.keys(coffeeConsumptionHistory)
          .sort((a, b) => b - a)
          .map((utcTime, i) => {
            const coffee = coffeeConsumptionHistory[utcTime];
            const timeSinceConsume = timeSinceConsumption(utcTime);
            const originalAmount = getCaffeineAmount(coffee.name);
            const remainingAmount = calculateCurrentCaffeineLevel({
              [utcTime]: coffee,
            });

            const summary = `${coffee.name} | ${timeSinceConsume} | $${coffee.cost} | ${remainingAmount}mg / ${originalAmount}mg`;
            return (
              <div title={summary} key={i}>
                <i className="fa-solid fa-mug-hot"></i>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default History;
