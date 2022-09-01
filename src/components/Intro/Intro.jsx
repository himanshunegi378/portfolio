import profileImage from "./profileImage.jpg";
import styles from "./style.module.scss";

export function Intro() {
  return (
    <div className="flex gap-6 p-3 flex-col lg:flex-row ">
      <div className="flex-shrink-0">
        <div
          className={styles.image}
          style={{
            display: "inline-flex",
            padding: 12,
            borderRadius: 32,
            backgroundColor: "#4158D0",
            backgroundImage:
              "linear-gradient(45deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",

            boxShadow:
              "0px 3px 1px -2px rgba(0, 0, 0, 0.3), 0px 2px 2px 0px rgba(0, 0, 0, 0.24), 0px 1px 5px 0px rgba(0, 0, 0, 0.22)",
          }}
        >
          <img
            src={profileImage}
            alt="profile"
            style={{
              borderRadius: 24,
            }}
          />
        </div>
      </div>
      <div
        className="text-gray-800"
        style={{
          alignSelf: "flex-start",
          marginTop: 12,
        }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-red-500">Himanshu</span>
        </h1>
        <div className="flex flex-col gap-1 text-lg ">
          <p>
            I'm a fullstack engineer by profession, currently
            working at Blackcoffer.
          </p>
          <p>
            I like building clean and interactive apps using React.js and other front-end tech.
          </p>
          <p>
            On weekends I like to travel and take photos. I like to binge try
            Cafes and Restaurants. Some weekends go into building some side
            projects like this Twitter client, screenshot mockup tool and this
            diary app.
          </p>
        </div>
      </div>
    </div>
  );
}
