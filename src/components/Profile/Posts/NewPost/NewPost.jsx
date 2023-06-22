import style from "./NewPost.module.css";
import React from "react";
import { Formik, Form, Field } from "formik";

function NewPost(props) {
    return (
        <Formik
            initialValues={{
                newPostText: "",
            }}
            onSubmit={(values) => {
                props.addPost(values.newPostText);
            }}
        >
            <Form className={style.newPostForm}>
                <div>
                    <div>
                        <label htmlFor="newPostText">My Posts</label>
                    </div>
                    <Field name="newPostText" type="newPostText" />
                </div>

                <div>
                    <button type="submit">Post</button>
                </div>
            </Form>
        </Formik>
    );
}

export default NewPost;
