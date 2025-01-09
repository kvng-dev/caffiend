import { useAuth } from "../context/AuthContext";
import {
  calculateCoffeeStats,
  calculateCurrentCaffeineLevel,
  coffeeConsumptionHistory,
  getTopThreeCoffees,
  statusLevels,
} from "../utils";

function StatCard({ lg, title, children }) {
  return (
    <div className={`card stat-card ${lg ? "col-span-2" : ""}`}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}
const Stats = () => {
  const { globalData } = useAuth();
  const stats = calculateCoffeeStats(globalData);

  const caffeineLevel = calculateCurrentCaffeineLevel(globalData);

  const warningLevel =
    caffeineLevel < statusLevels["low"].maxLevel
      ? "low"
      : caffeineLevel < statusLevels["moderate"].maxLevel
      ? "moderate"
      : "high";

  return (
    <div>
      <div className="section-header">
        <i className="fa-solid fa-chart-simple"></i>
        <h2>Stats</h2>
      </div>

      <div className="stats-grid">
        <StatCard lg title="Active Caffeine Level">
          <div className="status">
            <p>
              <span className="stat-text">{caffeineLevel}mg</span>
            </p>
            <h5
              className=""
              style={{
                color: statusLevels[warningLevel].color,
                background: statusLevels[warningLevel].background,
              }}
            >
              {warningLevel}
            </h5>
          </div>
          <p>{statusLevels[warningLevel].description}</p>
        </StatCard>
        <StatCard title="Daily Caffeine">
          <p>
            <span className="stat-text">{stats.daily_caffeine}</span>mg
          </p>
        </StatCard>
        <StatCard title="Avg # of Coffees">
          <p>
            <span className="stat-text">{stats.average_coffees}</span>
          </p>
        </StatCard>
        <StatCard title="Daily Cost ($)">
          <p>
            $<span className="stat-text">{stats.daily_cost}</span>
          </p>
        </StatCard>
        <StatCard title="Total Cost ($)">
          <p>
            $<span className="stat-text">{stats.total_cost}</span>
          </p>
        </StatCard>
        <table className="stat-table">
          <thead>
            <tr>
              <th>Coffee Name</th>
              <th>Number of Purchase</th>
              <th>Percentage of Total</th>
            </tr>
          </thead>
          <tbody>
            {getTopThreeCoffees(globalData).map((coffee, i) => (
              <tr key={i}>
                <td>{coffee.coffeeName}</td>
                <td>{coffee.count}</td>
                <td>{coffee.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Stats;
