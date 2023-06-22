import React from "react";
import style from "./Header.module.css";
import textLogo from "../../assets/images/text-logo-10.png";

function Header(props) {
    return (
        <div>
            <div className={style.header}>
                <img src={textLogo} alt="" />
            </div>
        </div>
    )
}

export default Header