import React, { HTMLProps, PropsWithChildren, ReactNode } from "react";
import style from "./style.module.scss";

export function Card(props: PropsWithChildren<{}>) {
  return (
    <div>
      <div className={style.card}>{props.children}</div>
    </div>
  );
}

export function CardImage({
  children,
  ...props
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;

  return (
    <div {...rest} className={`${style.card_img} ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({
  children,
  ...props
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;

  return (
    <div {...rest} className={`${style.card_body} ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  ...props
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div {...rest} className={`${style.card_title} ${className}`}>
      {children}
    </div>
  );
}

export function CardDescription({
  children,
  ...props
}: { children: ReactNode } & HTMLProps<HTMLDivElement>) {
  const { className, ...rest } = props;
  return (
    <div {...rest} className={`${className} ${style.card_description} `}>
      {children}
    </div>
  );
}
