import style from "./User.module.css";
import React from "react";
import avatar from "../../assets/images/avatar-11.png";
import { NavLink } from "react-router-dom";

function User({ user, followInProgress, follow, unfollow }) {
    return (
        <>
            <div key={user.id} className={style.wrapper}>
                <div className={style.userAva}>
                    <NavLink to={"/users/" + user.id}>
                        <img
                            src={
                                user.photos.small === null
                                    ? avatar
                                    : user.photos.small
                            }
                            alt=""
                        />
                    </NavLink>
                </div>
                <div>
                <div className={style.userName}>{user.name}</div>
                <div className={style.userStatus}>{user.status}</div>
                <div>
                    {user.followed ? (
                        <button
                            className={style.unfollowButton}
                            disabled={followInProgress.includes(user.id)}
                            onClick={() => {
                                unfollow(user.id);
                            }}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            className={style.followButton}
                            disabled={followInProgress.includes(user.id)}
                            onClick={() => {
                                follow(user.id);
                            }}
                        >
                            Follow
                        </button>
                    )}
                </div></div>
            </div>
        </>
    );
}

export default User;
