import { useState } from 'react';

function EditReply({ replys, deleteComment, uniqueid}){
    const [showEditField, setshowEditField]= useState(false);

    function HandleDeletReply (event){
        const MyPostId =  event.target.getAttribute("uniqueid");
        const MyReplyId = event.target.getAttribute("rid");
        deleteComment(MyPostId , MyReplyId)
    }
    function handleEditComment(){
        const newEditSectionValue = !showEditField
        setshowEditField(newEditSectionValue);
    }
return(
    <div className='reply'>
    {showEditField == true?(
       <input value={replys.ReplyContent}></input>) :
    (<p>{replys.ReplyContent}</p>) }
   
   <button rid={replys.rID} uniqueid={uniqueid} onClick={HandleDeletReply}>Delete</button>
   <button onClick={handleEditComment}>Edit</button>
</div>
);
  
}
export default EditReply;