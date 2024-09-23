import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends() {

  // state to hold data
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
  }, [])

  const friendsStyle = {
    border: '1px solid lightskyblue',
    padding: '20px',
    borderRadius: '10px',
  }

  return (
    <div style={friendsStyle}>
      <h3>Friends: {friends.length}</h3>
      {
        friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
      }
    </div>
  )
}