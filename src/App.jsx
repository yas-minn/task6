import './App.css'
import Post from './Components/Post/Post'
import NewPost from './Components/NewPost/NewPost'
import { useState } from 'react';
import User1 from "../src/images/User1.png"
import User2 from "../src/images/User2.png"
import User3 from "../src/images/User3.png"


function App() {
  const [ArrayOfObjects, setArrayOfObject] = useState ([
    {
      likes: 0,
      content: "post11111111",
      id: 1,
      username: "me",
      photo: User1,
    },
    {
      likes: 0,
      content: "post2222222",
      id: 2,
      username: "user2",
      photo: User2,
    },
    {
      likes: 0,
      content: "post3333333",
      id: 3,
      username: "user3",
      photo: User3,
    },
  ]);
  function AddNewPostInsideArray(PostContent){
    let NewPostObject = {
      likes: 0,
      content: PostContent,
      id: ArrayOfObjects.length + 1,
      username: "me",
      photo: User1,
    }
    let NewArrayOfObjects = [...ArrayOfObjects, NewPostObject];
    setArrayOfObject(NewArrayOfObjects);
  }
  function DeleteItem(PostID){
console.log(PostID)
const AfterDelete = ArrayOfObjects.filter((post) => {
  return post.id != PostID;
}  
);
setArrayOfObject(AfterDelete);
  }

  return (

    <>
    <div id="PostWrapper">
      {ArrayOfObjects.map((post) => {
        return (
          <Post
          uniqueid={post.id} 
          key={post.id} 
          likes={post.likes}
          photo={post.photo} 
          content={post.content}
          username={post.username}
          DeleteItem={DeleteItem} >
          </Post>
        );
      })}
    </div><NewPost AddNewPostInsideArray={AddNewPostInsideArray}></NewPost>
    </>

  );
}

export default App
