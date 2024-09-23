export default function Friend({ friend }) {

    const { name, email } = friend;

    const friendStyle = {
        border: '1px solid tomato',
        padding: '10px',
        borderRadius: '5px',
        margin: '10px'
    }
    return (
        <div style={friendStyle}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}