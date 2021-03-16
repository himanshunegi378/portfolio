import React from "react";
import style from "./style.module.scss";

function Navbar() {
  return (
    <nav className={style.navbar__container}>
      <div className={style.navbar}>
        <div className={style.navbar__item}>HOME</div>
      </div>
    </nav>
  );
}

export default Navbar;
