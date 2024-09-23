export default function Post({ post }) {

    const { id, title, body } = post;

    const postStyle = {
        border: '2px solid lightblue',
        padding: '10px',
        margin: '5px',
        borderRadius: '5px'
    }
    return (
        <div style={postStyle}>
            <h3>Post ID: {id}</h3>
            <h4>Title: {title}</h4>
            <p>{body}</p>
        </div>
    )
}