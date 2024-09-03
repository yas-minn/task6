import './App.css'
import Post from './Components/Post/Post'
import NewPost from './Components/NewPost/NewPost'
import { useEffect, useState } from 'react';
import useStore from './store/project';
import User1 from "/images/User1.png"
import User2 from "/images/User2.png"
import User3 from "/images/User3.png"


function App() {
  const [ArrayOfObjects, setArrayOfObject] = useState([]);
  useEffect(()=>{
    function CallApi() {
      fetch("http://localhost:3000/post")
      .then((response)=>{
       return response.json();
      })
      .then((finalResult)=>{
        setArrayOfObject(finalResult);

      });
    }
    CallApi();
  },[]);


  function AddNewPostInsideArray(PostContent) {
    let NewPostObject = {
      //likes: 0,
      content: PostContent,
      id: ArrayOfObjects.length + 1,
      username: "me",
      photo: User1,
      replys: [],
    }
    let NewArrayOfObjects = [...ArrayOfObjects, NewPostObject];
    setArrayOfObject(NewArrayOfObjects);
  }
  function DeleteItem(PostID) {
    console.log(PostID)
    const AfterDelete = ArrayOfObjects.filter((post) => {
      return post.id != PostID;
    }
    );
    setArrayOfObject(AfterDelete);
  }
  function AddNewReply(ReplyContent, id) {
   
   let myOldPost = ArrayOfObjects.filter((post)=>post.id == id )[0];
   let oldReplyCount = myOldPost.replys.length
   let newReplyObject = {
    ReplyContent: ReplyContent,
    rID: oldReplyCount + 1,
    }

    let AAU = ArrayOfObjects.map((currentpost)=>{
      if (currentpost.id == id) {
        currentpost.replys.push(newReplyObject);
      }
      return currentpost;
    });
    setArrayOfObject(AAU);
  }
  function deleteComment(uniqueid, rid) {
    let newAARDeleted = ArrayOfObjects.map((post) => {
      if (post.id == uniqueid) {
        let newArrayOfReplys = post.replys.filter((replys) => {
          return replys.rID != rid;
        });

        return { ...post, replys: newArrayOfReplys };
      }

      return post;
    });

    setArrayOfObject(newAARDeleted);
  }

  

  return (
  
   <>
      <div id="PostWrapper">
        {ArrayOfObjects.map((post) => {
          return ( 
           <Post
              uniqueid={post.id}
              key={post.id}
            //likes={post.likes}
              photo={post.photo}
              content={post.content}
              username={post.username}
              DeleteItem={DeleteItem}
              replys={post.replys}
              AddNewReply={AddNewReply}
              deleteComment={deleteComment} >
            </Post>
          );
        })}
      </div><NewPost AddNewPostInsideArray={AddNewPostInsideArray}></NewPost>
   </>

  );
}

export default App
