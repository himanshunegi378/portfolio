import React from "react";
import style from "./style.module.css";

function Card(props: { img: string; title: string; description: string }) {
  return (
    <div>
      <div className={style.card}>
        <div className={style.card_img}>
          <img src={props.img} />
        </div>
        <div className={style.card_body}>
          <div className={style.card_title} >{props.title}</div>
          <div className={style.card_description} >{props.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
