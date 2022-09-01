import React from "react";
import Experience from "./components/experience/Experience";
import { Intro } from "./components/Intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Profile from "./components/profile/Profile";
import { SocialNav } from "./components/socialNav/SocialNav";
import "./style.scss";
import "./styles/tailwind.css";

function App() {
  return (
    <div>
      <Navbar />
      <main className="top_padding">
        <section
          className=""
          // style={{
          //   backgroundColor: "#8EC5FC",
          //   backgroundImage: "linear-gradient(43deg, #8EC5FC 0%, #E0C3FC 100%)",
          // }}
        >
          <div className="container">
            <Profile />
            {/* <Intro /> */}
          </div>
        </section>
        <section>
          <div className="container">
            <SocialNav />
          </div>
        </section>
        <section>
          <div className="container">
            <Portfolio />
          </div>
        </section>
        <section className="mb-8">
          <div className="container">
            <Experience />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
