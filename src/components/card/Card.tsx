import React, { PropsWithChildren } from "react";
import style from "./style.module.scss";

export function Card(props: PropsWithChildren<{}>) {
  return (
    <div>
      <div className={style.card}>{props.children}</div>
    </div>
  );
}

export function CardImage(props: PropsWithChildren<{}>) {
  return <div className={style.card_img}>{props.children}</div>;
}

export function CardBody(props: PropsWithChildren<{}>) {
  return <div className={style.card_body}>{props.children}</div>;
}

export function CardTitle(props: PropsWithChildren<{}>) {
  return <div className={style.card_title}>{props.children}</div>;
}

export function CardDescription(props: PropsWithChildren<{}>) {
  return <div className={style.card_description}>{props.children}</div>;
}
