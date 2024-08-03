import { useState } from 'react'
import './AddReply.css'

function AddReply(props) {
  const [commentInput, setCommentInput] =useState("")
    function HandleReply(event){
        const id = event.target.getAttribute("uniqueid");
        props.AddNewReply(commentInput, id);
        setCommentInput ("");
        props.HideReplySection();
       
    }
    function HandleOnChange(event){
        setCommentInput(event.target.value);
    }
    return (
        <div className='AddNewReply'>
           <input value={commentInput} placeholder='add reply ...' onChange={HandleOnChange}></input>
           <button onClick={HandleReply} uniqueid={props.uniqueid}>Reply</button>
        </div>
    )
}

export default AddReply