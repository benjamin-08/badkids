import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UserProfileContainer from "./components/UserProfile/UserProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { initialize } from "./components/redux/authReducer";
import Preloader from "./assets/Preloader";
import React, { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
        // window.onerror = (event) => {
        //     alert(event);
        // };
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader />;
        }

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Routes>
                        <Route path="login" element={<LoginContainer />} />
                        <Route path="/" element={<Navigate to="profile" />} />
                    </Routes>
                    <Header />
                    <Routes>
                        <Route
                            path="profile"
                            element={
                                <>
                                    <ProfileContainer />
                                </>
                            }
                        />
                        <Route
                            path="users"
                            element={
                                <Suspense fallback="loading">
                                    <UsersContainer />
                                </Suspense>
                            }
                        />
                        <Route
                            path="users/:userId?"
                            element={<UserProfileContainer />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isInitialized: state.auth.isInitialized,
    };
};

export default connect(mapStateToProps, { initialize })(App);
