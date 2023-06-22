import React, { useState, useEffect } from "react";
import style from "./ProfileInfo.module.css";
import pencilIcon from "../../../assets/images/pencil-icon.png";

function ProfileStatus(props) {
    return (
        <div className={style.profileStatus}>
            {props.editStatusMode ? (
                <div>
                    <input
                        className={style.editStatusInput}
                        autoFocus
                        onBlur={props.deactivateEditStatusMode}
                        type="text"
                        value={props.status}
                        onChange={props.updateStatus}
                    />
                </div>
            ) : (
                <div>
                    <span>{props.status}</span>
                    <img
                        onClick={props.activateEditStatusMode}
                        src={pencilIcon}
                        alt=""
                        className={style.editStatusButton}
                    />
                </div>
            )}
        </div>
    );
}

export default ProfileStatus;
