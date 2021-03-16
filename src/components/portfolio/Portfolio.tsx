import React from "react";
import style from "./style.module.scss";
import image from "./fallback.jpg";
import {
  Card,
  CardBody,
  CardDescription,
  CardImage,
  CardTitle,
} from "../card/Card";
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
          <Card>
            <CardImage>
              <img src={image} />
            </CardImage>
            <CardBody>
              <CardTitle>TimerCards</CardTitle>
              <CardDescription>
                Countdown timer app with functionality to chain one timer after
                another
              </CardDescription>
            </CardBody>
          </Card>
        </a>
        <a
          href="https://himanshunegi378.github.io/media-consumption-tracker/"
          target="_blank"
          className={style.portfolio_content_container__item}
        >
          <Card>
            <CardImage>
              <img src={image} />
            </CardImage>
            <CardBody>
              <CardTitle>Media Search</CardTitle>
              <CardDescription>
                web app to get information of tv shows and movies
              </CardDescription>
            </CardBody>
          </Card>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
