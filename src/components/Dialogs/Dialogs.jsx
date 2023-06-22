import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import React from "react";
import { useFormik } from "formik";

function MessageForm(props) {
    const formik = useFormik({
        initialValues: {
            message: "",
        },
        onSubmit: (values) => {
            props.sentMessage(values.message);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="message"
                name="message"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.message}
            />
            <button type="submit">Send</button>
        </form>
    );
}

function Dialogs(props) {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map((dialog) => (
        <DialogItem key={dialog.id} id={dialog.id} userName={dialog.name} />
    ));
    let messagesElements = state.messagesData.map((message) => (
        <MessageItem key={message.id} message={message.message} />
    ));

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItem}>{dialogsElements}</div>
            <div className={style.messages}>
                {messagesElements}
                <MessageForm sentMessage={props.sentMessage} />
            </div>
        </div>
    );
}

export default Dialogs;
