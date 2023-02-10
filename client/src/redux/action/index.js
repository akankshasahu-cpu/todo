import axios from 'axios'
import { ADDNEW_TODO ,GETALL_TODO, TOGGLE_TODO , UPDATE_TODO, DELETE_TODO , TOGGLE_TAB} from './type'


const API_URL = 'http://localhost:8000'

export const addNewTodo = (data) => async(dispatch) =>{

    try{
    
        const response = await axios.post(`${API_URL}/todos`,{data})
    
        dispatch({type: ADDNEW_TODO ,payload:response.data})

    } catch (error){
        console.log('Error while calling addNewTodo', error.message)
    }

}


export const getAllTodo = () => async(dispatch) =>{

    try{
    
        const response = await axios.get(`${API_URL}/todos`)
    
        dispatch({type: GETALL_TODO,payload:response.data})

    } catch (error){
        console.log('Error while calling getAPI', error.message)
    }

}

export const toggleTodo = (id) => async(dispatch) =>{

    try{
    
        const response = await axios.get(`${API_URL}/todos/${id}`)
    
        dispatch({type: TOGGLE_TODO,payload:response.data});

    } catch (error){
        console.log('Error while calling getAPI', error.message)
    }

}

export const updateTodo = (id , data) => async(dispatch) =>{

    try{
    
        const response = await axios.put(`${API_URL}/todos/${id}` , {data})
    
        dispatch({type: UPDATE_TODO,payload:response.data});
        

    } catch (error){
        console.log('Error while calling getAPI', error.message)
    }

}

export const deleteTodo = (id ) => async(dispatch) =>{

    try{
    
        const response = await axios.delete(`${API_URL}/todos/${id}` )
    
        dispatch({type: DELETE_TODO,payload:response.data});
        

    } catch (error){
        console.log('Error while calling deleteAPI', error.message)
    }

}

export const toggleTabs= (tab ) => async(dispatch) => {
    dispatch({type:TOGGLE_TAB , selected : tab})
}



