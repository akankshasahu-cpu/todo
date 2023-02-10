import { deleteTodo, getAllTodo } from "../redux/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from './Todo';
import Tabs from './Tabs';

import { ALL_TODO , ACTIVE_TODO , DONE_TODO } from "../redux/action/type";


const Todos = ()=> {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab)
    
    useEffect(()=> {
        dispatch(getAllTodo());

    },[])

    const getTodos = () =>{
        if (currentTab === ALL_TODO) {
            return todos ;
        } else if (currentTab === ACTIVE_TODO) {
            return todos.filter(todo => !todo.done) ;
        } else if (currentTab === DONE_TODO){
            return todos.filter(todo => todo.done);
        }
    }

    const removeDoneTodo = () => {
        todos.forEach(({done , _id}) => {
            if (done){
                return dispatch(deleteTodo(_id)) ;
            }
        })
    }

    return (
        <>
        <article>
            <Tabs currentTab ={currentTab}/>

            {
              todos.some(todo => todo.done) ? (
               <button className="button clear"
               onClick = {removeDoneTodo}>remove done todo</button>) : null
            }

        <ul>
            { getTodos().map((todo)=>(
                      <Todo
                      key = {todo._id}
                      todo = {todo}/>
                    
                ))}
        </ul>   
        </article>
        </>
    )

}

export default Todos ;