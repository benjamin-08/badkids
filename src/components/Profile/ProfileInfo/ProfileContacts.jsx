import React from "react";
import style from "./ProfileInfo.module.css";

function ProfileContacts(props) {
    return (
        <div>
            <div className={style.contacts}>
                {Object.keys(props.userProfile.contacts).map((key) => {
                    return (
                        <div className={style.contactRow}>
                            {key}:{" "}
                            <a
                                href={props.userProfile.contacts[key]}
                                className={style.contactValue}
                            >
                                {props.userProfile.contacts[key]}
                            </a>
                        </div>
                    );
                })}
            </div>
            {props.myProfile ? (
                <div>
                    <button
                        className={style.editInfoButton}
                        onClick={() => {
                            props.toggleEditInfoMode(true);
                        }}
                    >
                        Edit info
                    </button>
                </div>
            ) : null}
        </div>
    );
}

export default ProfileContacts;
