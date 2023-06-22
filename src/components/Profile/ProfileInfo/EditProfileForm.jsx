import React, { useState, useEffect } from "react";
import style from "./EditProfileForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function sortInputs(a, b) {
    if (a === "fullName") {
        return -1;
    }
}

function EditProfileForm({ usersPage, deactivateEditInfoMode, updateProfile }) {
    return (
        <Formik
            initialValues={{
                ...usersPage.userProfile,
                lookingForAJob: false,
                lookingForAJobDescription: 'no',
                contacts: { ...usersPage.userProfile.contacts },
            }}
            onSubmit={(values) => {
                updateProfile(values);
                deactivateEditInfoMode(false);
            }}
            validationSchema={Yup.object({
                fullName: Yup.string().required("Required"),
                aboutMe: Yup.string().required("Required"),
            })}
        >
            <Form>
                {/* {Object.keys(usersPage.userProfile)
                    .sort(sortInputs)
                    .map((key) => {
                        if (
                            key != "contacts" &&
                            key != "userId" &&
                            key != "photos" &&
                            key != "lookingForAJob" &&
                            key != "lookingForAJobDescription"
                        ) {
                            return (
                                <div>
                                    <b>
                                        <label className={style.label} htmlFor={key}>{key}: </label>
                                    </b>
                                    <Field name={key} />
                                    <ErrorMessage name={key} />
                                </div>
                            );
                        }
                    })} */}
                    <div className={style.contactRow}>
                            <label className={style.label} htmlFor='fullName'>Name: </label>
                            <Field className={style.input} name={'fullName'} />
                        </div>

                {Object.keys(usersPage.userProfile.contacts).map((key) => {
                    return (
                        <div className={style.contactRow}>
                            <label className={style.label} htmlFor={key}>{key}: </label>
                            <Field className={style.input} name={"contacts." + key} />
                        </div>
                    );
                })}

                <div>
                    <button className={style.submitButton} type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    );
}

export default EditProfileForm;
