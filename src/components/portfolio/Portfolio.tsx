import React from "react";
import style from "./style.module.scss";
import image from "./fallback.jpg";
import addonAiImage from "./assets/addon-ai.png";
import {
  Card,
  CardBody,
  CardDescription,
  CardImage,
  CardTitle,
} from "../card/Card";

// Portfolio projects data
const portfolioData = [
  {
    id: 3,
    title: "AddonAI",
    description:
      "The objective of this project was to be able to create and share tool as addons with others users.",
    imageUrl: addonAiImage,
    liveUrl: "https://addon-lm.vercel.app/",
    sourceCodeUrl: "",
    altText: "AddonAI",
  },
  {
    id: 1,
    title: "TimerCards",
    description:
      "Countdown timer app with functionality to chain one timer after another",
    imageUrl:
      "https://cdn.dribbble.com/users/7262166/screenshots/15265516/media/c0192a9caad7f1f2dce0a723468c841e.png?compress=1&resize=800x600",
    liveUrl: "https://timercards.com/",
    sourceCodeUrl: "",
    altText: "timercards",
  },
  {
    id: 2,
    title: "MediaSearch",
    description: "web app to get information of tv shows and movies",
    imageUrl: null, // Will use fallback image
    liveUrl: "https://himanshunegi378.github.io/media-consumption-tracker/",
    sourceCodeUrl: "",
    altText: "Media consumption tracker",
  },
];

function Portfolio() {
  return (
    <div className={style.portfolio_container}>
      <div className={style.heading}>My Projects</div>
      {/* <div className={style.summary}></div> */}
      <div className={style.portfolio_content_container}>
        {portfolioData.map((project) => (
          <div
            key={project.id}
            className={style.portfolio_content_container__item}
          >
            <Card>
              <CardImage>
                <img src={project.imageUrl ?? image} alt={project.altText} />
              </CardImage>
              <CardBody>
                <CardTitle className={style.custom_card_title_container}>
                  <span className={style.title}>{project.title}</span>
                  <div className={style.link_container}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={style.link_item}
                      >
                        Live Project
                      </a>
                    )}
                    {project.sourceCodeUrl && (
                      <a
                        href={project.sourceCodeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={style.link_item}
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </CardTitle>
                <CardDescription
                  className={style.custom_card_description_container}
                >
                  {project.description}
                </CardDescription>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
