import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "ქათმის მწვადი",
    description: "ქათმის მწვადის უზარმაზარი პორცია საუკეთესო სოუსით",
    price: 22.99,
  },
  {
    id: "m2",
    name: "ქათმის შნიცელი",
    description: "ქათმის შნიცელი, ძალიან რბილი და ნაკლები ცხიმით",
    price: 16.5,
  },
  {
    id: "m3",
    name: "ქათმის ბურგერი",
    description: "ქათმის ბურგერი სალათით და ფრისთან ერთად",
    price: 12.99,
  },
  {
    id: "m4",
    name: "კიტრი და პომიდვრის სალათი",
    description: "კიტრი და პომიდვრის სალათი ზეთით, მწვანილით და ძმრით",
    price: 8.99,
  },
];

const Availablemeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default Availablemeals;
