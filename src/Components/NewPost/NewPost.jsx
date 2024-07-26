import { useState } from "react";
import "./NewPost.css";

function NewPost(props) {
    const [inputvalue, setInputValue] = useState("");
    function handleSendPost() {
       props.AddNewPostInsideArray(inputvalue);
        setInputValue("");
    }
    function handleOnChange(event){
        setInputValue(event.target.value);
    }
    return (
        <div className="NewPost">
            <input value={inputvalue} onChange={handleOnChange} className="Comment" placeholder="Add a comment..."></input>
            <button onClick={handleSendPost}>send</button>
        </div>
    )
}

export default NewPost