
import './ReplysWrapper.css';
import EditReply from '../EditReply/EditReply';

function ReplysWrapper(props) {
    
    return (
        <div className='Replays'>
       
            {props.AllReplys.map((replys) => {
                return (
                   <EditReply
                   replys={replys}
                   deleteComment={props.deleteComment}
                   uniqueid={props.uniqueid} ></EditReply>
                );
            })}
        </div>
    );
}

export default ReplysWrapper;