import style from "./Users.module.css";
import React from "react";
import Paginator from "./Paginator";
import User from "./User";
import Navbar from "../Navbar/Navbar";

function Users(props) {
    let users = props.state.users.map((user) => (
        <User
            user={user}
            followInProgress={props.state.followInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
        />
    ));

    return (
        <div>
            <div className={style.wrapper}>
                <div>{users}</div>

                <Navbar />
            </div>
            <Paginator
                totalAmount={props.state.totalAmount}
                itemsOnPage={props.state.usersAmountOnPage}
                currentPage={props.state.currentPage}
                onPageClick={props.onPageChanged}
            />
        </div>
    );
}

export default Users;
