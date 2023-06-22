import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

function DialogItem(props) {
    return (
        <div className={style.dialog}>
            <NavLink
                to={"/dialogs/" + props.id}
                className={(navData) =>
                    navData.isActive ? style.active : style.item
                }
            >
                {props.userName}
            </NavLink>
        </div>
    );
}

export default DialogItem;
