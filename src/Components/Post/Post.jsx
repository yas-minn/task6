import { useState } from "react";
import "./Post.css";
import AddReply from "../AddReply/AddReply";
import ReplysWrapper from "../ReplysWrapper/ReplysWrapper"
import useStore from "../../store/project";



function Post(props) {
    const [showReplyDiv,setShowReplyDiv] = useState(false);
    

    
    const {count, plus, minus} = useStore()
    /*const [count, setcount] = useState(props.likes);
    function Plus() {
        const newValue = count + 1;
        setcount(newValue);
    }
    function Minus() {
        const newValue = count - 1;
        setcount(newValue);
    }*/



    function handleDelete(event) {
    props.DeleteItem(event.target.getAttribute('uniqueid'))
    }
    function HandleReplybtn() {
let finalResult = !showReplyDiv;
setShowReplyDiv (finalResult);
    }
    function HideReplySection(){
        setShowReplyDiv(false);
    }

    return (

        <div className="PostWrap">
              <div className="Post">
            <div className="CounterWrapper">
                <button onClick={plus}>+</button>
                <span>{count}</span>
                <button onClick={minus}>-</button>
            </div>
            <div className="Layout">
                <div className="Info">
                    <img src={props.photo} />
                    <label>{props.username}</label>
                </div>
                <p>{props.content}</p>
            </div>

            {props.username == "me" ?
                (<button className="Deletebtns" onClick={handleDelete} uniqueid={props.uniqueid}>Delete</button>)
                : null}
            <button onClick={HandleReplybtn} className="Replybtns">Reply</button>

        </div>
        <ReplysWrapper AllReplys={props.replys} 
       uniqueid={props.uniqueid} 
       deleteComment={props.deleteComment}></ReplysWrapper>
        {showReplyDiv == true ? (
            <AddReply 
            HideReplySection={HideReplySection}
            AddNewReply={props.AddNewReply}
            uniqueid={props.uniqueid}
            ></AddReply>
        ) : null}
        </div>
      
        
        

    )
}

export default Post