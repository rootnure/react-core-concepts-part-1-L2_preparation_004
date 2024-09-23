import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  // step-1: create a state to store the data
  const [posts, setPosts] = useState([]);

  // step-2: create use effect with no dependency
  useEffect(() => {

    // step-3: use fetch to load data
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data)) // step-4: set data to state
  }, []);
  return (
    <div>
      <h3>Posts: {posts.length}</h3>
      {/* step-5: show data in ui */}
      {
        posts.map(post => <Post key={post.id} post={post}></Post>)
      }
    </div>
  )
}