import { toggleTodo , updateTodo , deleteTodo} from "../redux/action";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Todo = ({todo}) => {

    const dispatch = useDispatch()

    const [editing , setEditing] = useState(false)
    const [text , setText] = useState(todo.data)

    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(prevState => !prevState);
        dispatch(updateTodo(todo._id ,text));
        console.log(text)
    }   

    const handleClick = () => {
        dispatch(deleteTodo(todo._id)) ;
        console.log('clicking') ;
    }

    return(
        <>
        <li className="alltodo" 
        onClick={ ()=> dispatch(toggleTodo(todo._id))}
        style ={{
            textDecoration : todo.done ? 'line-through' : '',
            color : todo.done ? '#000000' :'#eeee'}}>


            <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>



            <span className="icon"
            onClick= {handleClick}> 
            <i className='fas fa-trash' ></i></span>
            <span className="icon" 
            onClick={()=>setEditing(prevState => !prevState)}>
                <i className='fas fa-edit'  ></i></span>
            
        </li>
        </>
    )
}

export default Todo ;