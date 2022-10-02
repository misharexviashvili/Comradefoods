import React from "react";
import MealsSummary from "./MealsSummary";
import Availablemeals from "./AvailableMeals";

const Meals = (props) => {
  return (
    <React.Fragment>
      <MealsSummary />
      <Availablemeals />
    </React.Fragment>
  );
};

export default Meals