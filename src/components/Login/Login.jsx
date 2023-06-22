import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "./Login.module.css";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import textLogo from "../../assets/images/text-logo-10.png";

function Login(props) {
    if (props.auth.isAuthorized) {
        return <Navigate to="/profile" />;
    }

    return (
        <div className={style.wrapper}>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false,
                    captcha: "",
                }}
                onSubmit={(values) => {
                    props.login(values);
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                    password: Yup.string().required("Required"),
                    captcha: props.auth.captchaImage
                        ? Yup.string().required("Required")
                        : Yup.string(),
                })}
            >
                {({ errors, touched }) => (
                    <Form className={style.loginForm}>
                        <div className={style.loginFormContent}>
                            <div>
                                <img
                                    src={textLogo}
                                    alt=""
                                    className={style.textLogo}
                                />
                            </div>
                            <div className={style.formContainer}>
                                <div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className={
                                                errors.email && touched.email
                                                    ? style.errorLabel +
                                                      " " +
                                                      style.label
                                                    : style.label
                                            }
                                        >
                                            E-mail
                                        </label>
                                    </div>
                                    <Field
                                        name="email"
                                        type="email"
                                        className={
                                            errors.email && touched.email
                                                ? style.errorInput +
                                                  " " +
                                                  style.input
                                                : style.input
                                        }
                                    />
                                    <div className={style.errorMessage}>
                                        <ErrorMessage name="email" />
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className={
                                                errors.password &&
                                                touched.password
                                                    ? style.errorLabel +
                                                      " " +
                                                      style.label
                                                    : style.label
                                            }
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <Field
                                        name="password"
                                        type="password"
                                        className={
                                            errors.password && touched.password
                                                ? style.errorInput +
                                                  " " +
                                                  style.input
                                                : style.input
                                        }
                                    />
                                    <div className={style.errorMessage}>
                                        <ErrorMessage name="password" />
                                    </div>
                                </div>

                                <div className={style.checboxWrapper}>
                                    <Field
                                        name="rememberMe"
                                        type="checkbox"
                                        className={style.checkbox}
                                    />
                                    <label
                                        htmlFor="rememberMe"
                                        className={style.label}
                                    >
                                        Remember me
                                    </label>
                                </div>
                                {props.auth.captchaImage ? (
                                    <div>
                                        <div>
                                            <img
                                                src={props.auth.captchaImage}
                                                alt=""
                                            />
                                        </div>
                                        <Field name="captcha"></Field>
                                    </div>
                                ) : null}

                                <div>
                                    <button
                                        type="submit"
                                        className={style.loginButton}
                                    >
                                        Login
                                    </button>
                                </div>
                                <div className={style.or}>or</div>
                                <div>
                                    <button className={style.signUpButton}>
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Login;
