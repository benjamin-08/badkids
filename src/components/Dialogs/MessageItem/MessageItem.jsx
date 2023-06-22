import style from "./../Dialogs.module.css";

function MessageItem(props) {
    return <div className={style.message}>{props.message}</div>;
}

export default MessageItem;
