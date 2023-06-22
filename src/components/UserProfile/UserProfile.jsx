import React from "react";
import style from "./UserProfile.module.css";
import Header from "../Header/Header";
import avatar from "../../assets/images/ava-11.jpg";
import ProfileContacts from "../Profile/ProfileInfo/ProfileContacts";
import Nav from "../Navbar/Navbar";

function UserProfile({ userProfile, userStatus }) {
    return (
        <>
            <Header />
            {userProfile ? (
                <div className={style.profileWrapper}>
                    <div>
                        <img
                            className={style.userAva}
                            src={
                                userProfile.photos.large
                                    ? userProfile.photos.large
                                    : avatar
                            }
                            alt=""
                        />
                    </div>
                    <div className={style.profileInfoInner}>
                        <div className={style.profileName}>
                            {userProfile.fullName}
                        </div>
                        <div className={style.profileStatus}>{userStatus}</div>
                        <ProfileContacts
                            userProfile={userProfile}
                            myProfile={false}
                        />
                    </div>
                    <Nav />
                </div>
            ) : null}
        </>
    );
}

export default UserProfile;
