import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UserProfileContainer from "./components/UserProfile/UserProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { initialize } from "./components/redux/authReducer";
import Preloader from "./assets/Preloader";
import React, { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

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
            <Router>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="login" element={<LoginContainer />} />
                        <Route path="/" element={<Navigate to="profile" />} />

                        <Route
                            path="profile"
                            element={
                                <>
                                    <ProfileContainer />
                                </>
                            }
                        />
                        <Route
                            path="dialogs/*"
                            element={<DialogsContainer />}
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
            </Router>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isInitialized: state.auth.isInitialized,
    };
};

export default connect(mapStateToProps, { initialize })(App);
