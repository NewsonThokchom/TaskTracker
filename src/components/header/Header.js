import { MdAddCircle } from "react-icons/md";

const Header = () => {
    return (
    <>
    <h1 className='title'>Task Tracker</h1>
    <div className="button-wrapper">
    <h3>Task Lists</h3>
        <div>
            <button className="addTaskBtn"><span><MdAddCircle/></span>  Add Task</button>
        </div>
    </div>
    </>
    );
}
 
export default Header;
 