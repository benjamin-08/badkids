import React from "react";
import style from "./ProfileInfo.module.css";
import avatar from "../../../assets/images/avatar-11.png";

function ProfileAva(props) {
    return (
        <div className={style.profileAvaContainer}>
            <div className={style.changeProfileAvaButton}>
                <input
                    id="changeAvaInput"
                    type="file"
                    onChange={props.onEditAva}
                    className={style.changeAvaInput}
                />
                <label
                    htmlFor="changeAvaInput"
                >
                    <img
                        className={style.profileAva}
                        src={props.ava ? props.ava : avatar}
                        alt=""
                    />
                </label>
            </div>
        </div>
    );
}

export default ProfileAva;
