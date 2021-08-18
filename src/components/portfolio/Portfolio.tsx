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
        <div className={style.portfolio_content_container__item}>
          <Card>
            <CardImage>
              <img src="https://cdn.dribbble.com/users/7262166/screenshots/15265516/media/c0192a9caad7f1f2dce0a723468c841e.png?compress=1&resize=800x600" alt='timercards'/>
            </CardImage>
            <CardBody>
              <CardTitle className={style.custom_card_title_container}>
                <span className={style.title}>TimerCards</span>
                <div className={style.link_container}>
                  <a
                    href="https://timercards.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={style.link_item}
                  >
                    Live Project
                  </a>
                  {/* <a className={style.link_item}>Source Code</a> */}
                </div>
              </CardTitle>
              <CardDescription className={style.custom_card_description_container}>
                Countdown timer app with functionality to chain one timer after
                another
              </CardDescription>
            </CardBody>
          </Card>
        </div>
        <div className={style.portfolio_content_container__item}>
          <Card>
            <CardImage>
              <img src={image} alt='Media consumption tracker'/>
            </CardImage>
            <CardBody>
              <CardTitle className={style.custom_card_title_container}>
                <span className={style.title}>MediaSearch</span>
                <div className={style.link_container}>
                  <a
                    href="https://himanshunegi378.github.io/media-consumption-tracker/"
                    target="_blank"
                    rel="noreferrer"
                    className={style.link_item}
                  >
                    Live Project
                  </a>
                  {/* <a className={style.link_item}>Source Code</a> */}
                </div>
              </CardTitle>
              <CardDescription className={style.custom_card_description_container}>
                web app to get information of tv shows and movies
              </CardDescription>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
