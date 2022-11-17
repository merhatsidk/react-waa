import { useState } from "react";
import PostDetails from "../../Components/Post/PostDetails/PostDetails";
import Posts from "../Posts/Posts"

const Dashboard = () => {
  const [posts, setPosts] = useState([
      { id: 1, title: "News", author: "natty" },
      { id: 2, title: "Sport", author: "mera" },
      { id: 3, title: "News", author: "mike" }
    ]);

const [postDetail, setPostDetail] = useState([
    { id: 1, title: "News", author: "natty" }
]);

   const [newTitle, setNewTitle] = useState('');
    const handleTitleChange = (event) => {
        //console.log(event.target.value)
        setNewTitle(event.target.value);
    }

    
    const changeTitle = () => {
        const copyPosts = [...posts];
        copyPosts[0].title = newTitle;
        setPosts(copyPosts);
    }

    const selectedPost = (id) => {
        const post = posts.filter(p => p.id == id);
        const p = {...post}
        setPostDetail(p);
        console.log(p)
    }

  return (
    <div>
        <Posts posts = {posts} selectedPost = {selectedPost}  />
        <div>
            <input type= "text" onChange={handleTitleChange}></input>    
            
        </div>
        <br /> 
        <div>
          <button type="button" onClick={changeTitle} >Chnage Title</button>
        </div>
        <div>
            <PostDetails postDetail = {postDetail}/>
        </div>
       
    </div>
  )
}

export default Dashboard;