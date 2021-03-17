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
              href="https://taxvisor.in/"
              target="_blank"
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
    </div>
  );
}

export default Experience;
