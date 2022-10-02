import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>უგემრიელესი ქათმის კერძები მისამართზე მიტანით</h2>
      <p>
        აარჩიეთ საკვები ჩვენი სიიდან და მიირთვით გემრიელად ლანჩზე თუ სახლში.
      </p>
      <p>
        ჩვენი კერძები მზადდები უმაღლესი ხარისხის პროდუქტისკგან და პროფესიონალი მზარეულების მიერ!
      </p>
    </section>
  );
};

export default MealsSummary;
