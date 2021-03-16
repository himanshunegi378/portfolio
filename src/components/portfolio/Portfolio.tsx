import React from "react";
import Card from "../card/Card";
import style from "./style.module.scss";
import image from "./fallback.jpg";
function Portfolio() {
  return (
    <div className={style.portfolio_container}>
      <div className={style.heading}>My Projects</div>
      {/* <div className={style.summary}></div> */}
      <div className={style.portfolio_content_container}>
        <a
          href="https://timercards.com/"
          target="_blank"
          className={style.portfolio_content_container__item}
        >
          <Card
            img={image}
            title={"TimerCards"}
            description={
              "Countdown timer app with functionality to chain one timer after another"
            }
          />
        </a>
        <a
          href="https://himanshunegi378.github.io/media-consumption-tracker/"
          target="_blank"
          className={style.portfolio_content_container__item}
        >
          <Card
            img={image}
            title={"Media Search"}
            description={"web app to get information of tv shows and movies"}
          />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
