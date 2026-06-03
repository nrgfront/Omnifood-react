import Style from "./PlannerPage.module.css";
import PlannerCard from "../components/meals/PlannerCard";

function PlannerPage() {
  return (
    <div className={Style.plannerContainer}>
      <h3> my plan </h3>
      <div className={Style.summaryCard}>
        <p>selected meals</p>
        <p>🔥 total calories</p>
        <p>7 meals selected</p>
      </div>
      <div className={Style.plannerList}>
        <p>Vegan Bowl</p>
        <p>🔥 450 kcal</p>
        <p>🌱 Vegan</p>
      </div>
      <button className="btn">Remove</button>
    </div>
  );
}

export default PlannerPage;
