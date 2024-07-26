import { useState } from "react";
import "./Post.css";


function Post(props) {
    const [count, setcount] = useState(props.likes)
    function Plus() {
        const newValue = count + 1;
        setcount(newValue);
    }
    function Minus() {
        const newValue = count - 1;
        setcount(newValue);
    }
    function handleDelete(event) {
    props.DeleteItem(event.target.getAttribute('uniqueid'))
    }

    return (

        <div className="Post">
            <div className="CounterWrapper">
                <button onClick={Plus}>+</button>
                <span>{count}</span>
                <button onClick={Minus}>-</button>
            </div>
            <div className="Layout">
            <div className="Info">
            <img src={props.photo}/>
            <label>{props.username}</label>
            </div>
            <p>{props.content}</p>
            </div>

            {props.username == "me" ?
            (<button className="Deletebtns" onClick={handleDelete} uniqueid={props.uniqueid} >Delete</button>)
            : null }
            
        </div>

    )
}

export default Post