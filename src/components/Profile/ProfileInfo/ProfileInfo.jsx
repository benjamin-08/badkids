import React, { useState, useEffect } from "react";
import style from "./ProfileInfo.module.css";
import EditProfileForm from "./EditProfileForm";
import ProfileAva from "./ProfileAva";
import ProfileStatus from "./ProfileStatus";
import ProfileContacts from "./ProfileContacts";
import Nav from "../../Navbar/Navbar";

function ProfileInfo(props) {
    let [editStatusMode, changeEditStatus] = useState(false);
    let [status, changeStatus] = useState(props.usersPage.userStatus);
    let [editInfoMode, changeEditInfo] = useState(false);

    let toggleEditInfoMode = (boolean) => {
        changeEditInfo(boolean);
    };

    let activateEditStatusMode = () => {
        changeEditStatus(true);
    };

    let deactivateEditStatusMode = () => {
        changeEditStatus(false);
        props.updateMyStatus(status);
    };

    let updateStatus = (e) => {
        changeStatus(e.target.value);
    };

    useEffect(() => {
        changeStatus(props.usersPage.userStatus);
    }, [props.usersPage.userStatus]);

    let onEditAva = (e) => {
        if (e.target.files.length) {
            props.updateAvatarThunk(e.target.files[0]);
        }
    };

    return (
        <div className={style.profileWrapper}>
            <ProfileAva
                ava={props.usersPage.userProfile.photos.large}
                onEditAva={onEditAva}
            />
            <div className={style.profileInfoInner}>
                {editInfoMode ? null : (
                    <>
                        <div className={style.profileName}>
                            {props.usersPage.userProfile.fullName}
                        </div>
                        <ProfileStatus
                            status={status}
                            activateEditStatusMode={activateEditStatusMode}
                            deactivateEditStatusMode={deactivateEditStatusMode}
                            editStatusMode={editStatusMode}
                            updateStatus={updateStatus}
                        />
                    </>
                )}
                {editInfoMode ? (
                    <EditProfileForm
                        usersPage={props.usersPage}
                        deactivateEditInfoMode={toggleEditInfoMode}
                        updateProfile={props.updateProfile}
                    />
                ) : (
                    <ProfileContacts
                        userProfile={props.usersPage.userProfile}
                        toggleEditInfoMode={toggleEditInfoMode}
                        myProfile={true}
                    />
                )}
            </div>
            <Nav />
        </div>
    );
}

export default ProfileInfo;
