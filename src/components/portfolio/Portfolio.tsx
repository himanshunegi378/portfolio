import React from "react";
import Card from "../card/Card";
import style from "./style.module.css";
import image from "./fallback.jpg";
function Portfolio() {
  return (
    <div className={style.portfolio_container}>
      <div className={style.heading}>My Portfolio</div>
      <div className={style.summary}>
        I mainly use react to build my applications.
      </div>
      <div className={style.portfolio_content_container}>
        <div className={style.portfolio_content_container__item}>
          <Card
            img={image}
            title={"TimerCards"}
            description={
              "Countdown timer app with functionality to chain one timer after another"
            }
          />
        </div>
        <div className={style.portfolio_content_container__item}>
          <Card
            img={image}
            title={"Media Serach"}
            description={"web app to get information of tv shows and movies"}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
