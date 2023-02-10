import { TABS} from "../redux/action/type";
import { useDispatch } from "react-redux";
import {toggleTabs} from '../redux/action/index'
const Tabs = ( {currentTab}) => {

    const dispatch = useDispatch();
    
    return (
        <>
        {
           TABS.map(tab =>(
            <button className= {tab === currentTab ? "selected_button": "button"}
            onClick={()=> dispatch(toggleTabs(tab))}> 
                  {tab}
            </button>
           ))  
        }
       
        </>
    )
}

export default Tabs ;