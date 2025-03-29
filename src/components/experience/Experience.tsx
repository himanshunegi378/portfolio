import React from "react";
import style from "./style.module.scss";

function Experience() {
  return (
    <div className={style.container}>
      <div className={style.heading}>Experience</div>
      <div className={style.experience_card_list}>
      <div className={style.experience_card_wrapper}>
          <div className={style.experience_card}>
            <a
              href="https://samta.ai/"
              target="_blank"
              rel="noreferrer"
              className={style.company_name}
            >
              Samta
            </a>
            <div className={style.post}>SDE</div>
            <div className={style.duration}>Nov 2022 - Present</div>
            <div className={style.summary}>
            Building banking application for the global market other than that Managing frontend team on multiple internal and client projects.            </div>
          </div>
        </div>
        <div className={style.experience_card_wrapper}>
          <div className={style.experience_card}>
            <a
              href="https://www.blackcoffer.com/"
              target="_blank"
              rel="noreferrer"
              className={style.company_name}
            >
              Blackcoffer
            </a>
            <div className={style.post}>Web Developer</div>
            <div className={style.duration}>Mar 2021 - Nov 2022</div>
            <div className={style.summary}>
              Working on variety of projects such as website development, backend development and maintenance using <span className={style.highlight}>React</span>, <span className={style.highlight}>express</span>,
              <span className={style.highlight}> Azure function </span> and <span className={style.highlight}>various database technologies</span>
            </div>
          </div>
        </div>
        <div className={style.experience_card_wrapper}>
          <div className={style.experience_card}>
            <a
              href="https://taxvisor.in/"
              target="_blank"
              rel="noreferrer"
              className={style.company_name}
            >
              Taxvisor
            </a>
            <div className={style.post}>Web Developer</div>
            <div className={style.duration}>Mar 2020 - Sep 2020</div>
            <div className={style.summary}>
              Worked on redesigning the company website and developing api
              endpoints for gst filing using <span className={style.highlight}>React</span>, <span className={style.highlight}>Nextjs</span>,
              <span className={style.highlight}> firebase</span> and <span className={style.highlight}>SQL</span>
            </div>
          </div>
        </div>

        <div className={style.experience_card_wrapper}>
          <div className={style.experience_card}>
            <div className={style.company_name}>
              Shrishti Softech solutions pvt. ltd
            </div>
            <div className={style.post}>SEO</div>
            <div className={style.duration}>July 2019 - Aug 2019</div>
            <div className={style.summary}>
              Worked on creating website using weebly and registering them on directory
              listing.
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Experience;
