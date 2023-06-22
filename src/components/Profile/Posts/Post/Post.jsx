import style from "./Post.module.css";

function Post(props) {
    return (
        <div className={style.item}>
            <img
                src="https://www.gorodche.ru/wp-content/uploads/2023/01/avatar025849.jpg"
                alt=""
            />
            {props.message}
        </div>
    );
}

export default Post;
