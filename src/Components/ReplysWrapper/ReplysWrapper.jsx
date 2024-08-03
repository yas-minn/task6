import './ReplysWrapper.css';

function ReplysWrapper(props) {
    function HandleDeletReply (event){
        const MyPostId =  event.target.getAttribute("uniqueid");
        const MyReplyId = event.target.getAttribute("rid");
        props.deleteComment(MyPostId , MyReplyId)
    }
    return (
        <div className='Replays'>
            {props.AllReplys.map((replys) => {
                return (
                    <div className='reply'>
                        <p>{replys.ReplyContent}</p>
                        <button rid={replys.rID} uniqueid={props.uniqueid} onClick={HandleDeletReply}>Delete</button>
                        <button onClick={HandleEditComment}>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ReplysWrapper;