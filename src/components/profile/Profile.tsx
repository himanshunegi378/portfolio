import React, { MouseEvent, useEffect, useRef } from "react";
import style from "./style.module.scss";
import profileImage from "./profileImage.jpg";
import { profile } from "node:console";

const scale = (val: number, src: number[], dst: number[]) => {
  return ((val - src[0]) / (src[1] - src[0])) * (dst[1] - dst[0]) + dst[0];
};

const distance = (point1: number[], point2: number[]) => {
  const xDiff = point1[0] - point2[0],
    yDiff = point1[1] - point2[1];
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
};

function Profile() {
  const myRef = useRef<HTMLDivElement>(null);
  const otherRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageRotationRef = useRef<HTMLDivElement>(null);
  //   useEffect(() => {
  //     const onMouseOut = () => {
  //       if (!imageRotationRef.current) return;
  //       imageRotationRef.current.style.transform = ``;
  //     };

  //     const onMouseMove = (event: any) => {
  //       const element = event.target as HTMLElement;
  //       var rect = element.getBoundingClientRect();

  //       var x = element.offsetWidth / 2 - (event.clientX - rect.left); //x position within the element.
  //       var y = element.offsetHeight / 2 - (event.clientY - rect.top); //y position within the element.
  //       const radius = element.offsetWidth / 2 + 50;
  //       if (!imageRotationRef.current) return;
  //       imageRotationRef.current.style.transform = `perspective(700px) rotateX(${scale(
  //         y,
  //         [-radius, radius],
  //         [-50, 50]
  //       )}deg) rotateY(${scale(x, [radius, -radius], [-50, 50])}deg)`;
  //     };

  //     // otherRef.current?.addEventListener("mouseout", onMouseOut);

  //     // otherRef.current?.addEventListener("mousemove", onMouseMove);
  //     const onResize = () => {
  //       if (!imageRef.current || !otherRef.current || !myRef.current) return;

  //       const parentRect = myRef.current.parentElement!.getBoundingClientRect();

  //       console.log("hell");
  //       otherRef.current.style.top = `${
  //         imageRef.current.getBoundingClientRect().top - parentRect.top
  //       }px`;
  //       otherRef.current.style.left = `${
  //         imageRef.current.getBoundingClientRect().left - parentRect.left
  //       }px`;
  //       otherRef.current.style.width = `${imageRef.current.getBoundingClientRect().width}px`;
  //       otherRef.current.style.height = `${imageRef.current.clientHeight}px`;
  //     };
  //     window.addEventListener("resize", onResize);
  //     // onResize();
  //     // imageRef.current?.addEventListener("resize", (ev) => {});
  //     return () => {
  //       otherRef.current?.removeEventListener("mouseout", onMouseOut);
  //       otherRef.current?.removeEventListener("mousemove", onMouseMove);
  //     };
  //   }, []);
  return (
    <>
      <div className={style.profile_container}>
        <div className={style.profile_image_container}>
          <div className={style.profile_image}>
            <img src={profileImage} />
          </div>
        </div>
        <div className={style.profile_description}>
          <div className={style.open_capsule}>
            <div className={style.open_capsule__left}></div>
            <div className={style.open_capsule__inside__wrapper}>
              <div className={style.open_capsule__inside__wrapper__content}>
                Hi, I am a Himanshu. I am a web developer with focus on front
                end, mostly I work on building interesting web apps which you
                can view below in my portfolio.
              </div>
            </div>
            <div className={style.open_capsule__right}></div>
          </div>
        </div>
      </div>
      {/* <div className={style.profile_container}></div> */}
    </>
  );
}

export default Profile;
