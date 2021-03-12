import React, { useEffect } from "react";
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
      <div className="container">
        <div className='mb-12'>
          <Profile />
        </div>
        <div>
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;
