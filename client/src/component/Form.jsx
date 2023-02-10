import { useState } from "react";
import  {addNewTodo} from "../redux/action/index";
import { useDispatch } from "react-redux";

const Form = () => {
    const[text , setText] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addNewTodo(text));
        setText(' ')
    }

    const onChange = (e) =>{
        setText(e.target.value)
    }
    return (
        <>
        <form className="form" onSubmit={handleSubmit}>
            <input className="input" placeholder="Enter your todo..." onChange={onChange} value ={text}/>
        </form>
        </>
    );
}

export default Form ;