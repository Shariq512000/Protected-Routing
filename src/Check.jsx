import Comment from "./comment";


function Check() {

    const abc = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            value: "200",
            name: ' The Kitty',
            avatarUrl: 'http://placekitten.com/g/64/64'
        }
    };

    return (
        <div>
            <Comment
                date={abc.date}
                text={abc.text}
                author={abc.author} />
        </div>
    )
}
export default Check;