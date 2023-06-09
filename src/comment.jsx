

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
                <div className="UserInfo-name">
                    {props.author.value}
                </div>
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name} />
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            {/* <div className="Comment-date">
                {formatDate(props.date)}
            </div> */}
        </div>
    );
}
export default Comment;