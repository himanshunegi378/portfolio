import React, { useEffect } from "react";
import Experience from "./components/experience/Experience";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Profile from "./components/profile/Profile";

function App() {
  useEffect(() => {
    // [].forEach.call(document.querySelectorAll("*"), function (a: any) {
    //   a.style.outline =
    //     "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
    // });

    return () => {};
  }, []);
  return (
    <div>
      <Navbar />
      <main className='top_padding'>
        <section className="">
          <div className="container">
            <Profile />
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
