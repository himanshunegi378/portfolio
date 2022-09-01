import React from "react";
import style from "./style.module.scss";
import profileImage from "./profileImage.jpg";
import { animated, useSpring } from "react-spring";

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 10,
  (x - window.innerWidth / 2) / 10,
  1.1,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) scale(${s})`;

function Profile() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <>
      <div className={style.profile_container}>
        <div className={style.profile_image_container}>
          {/* <animated.div
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            //@ts-ignore
            style={{ transform: props.xys.interpolate(trans) }}
            className={style.profile_image}
          > */}
          <img
            src={profileImage}
            className="rounded-sm shadow-md"
            alt="profile"
          />
          {/* </animated.div> */}
        </div>
        <div className={style.profile_description}>
          <animated.div
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            //@ts-ignore
            style={{ transform: props.xys.interpolate(trans) }}
            className={style.open_capsule}
          >
            {/* <div className={style.open_capsule__left}></div> */}
            <div
              // className={style.open_capsule__inside__wrapper}
              className="rounded-md bg-navyblue-500 px-4 py-2"
            >
              <div className="rounded-md text-white font-light text-center">
                Hi, I am <span className=" font-normal">Himanshu Negi</span>. I am a
                web developer with focus on front end, mostly I work on building
                interesting web apps which you can view below in my portfolio.
              </div>
            </div>
            {/* <div className={style.open_capsule__right}></div> */}
          </animated.div>
        </div>
      </div>
      {/* <div className={style.profile_container}></div> */}
    </>
  );
}

export default Profile;
