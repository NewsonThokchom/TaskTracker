import { MdCheckCircle,MdDeleteForever,MdModeEdit } from 'react-icons/md';

const TaskList = () => {
    return ( 
        <div className="task-list">
            <ul>
                <li className="list-item-wrapper" >
                    <div className="list-title-status">
                        <MdCheckCircle className="check-icon"/>
                        <p>list 1</p> 
                    </div> 
                    
                    <div className="edit-delete-btn">
                        <MdModeEdit className="edit-icon"/>
                        <MdDeleteForever className="delete-icon"/>
                    </div>
                </li>
                <li className="list-item-wrapper" >
                    <div className="list-title-status">
                        <MdCheckCircle className="check-icon"/>
                        <p>list 1</p> 
                    </div> 
                    
                    <div className="edit-delete-btn">
                        <MdModeEdit className="edit-icon"/>
                        <MdDeleteForever className="delete-icon"/>
                    </div>
                </li>
                <li className="list-item-wrapper" >
                    <div className="list-title-status">
                        <MdCheckCircle className="check-icon"/>
                        <p>list 1</p> 
                    </div> 
                    
                    <div className="edit-delete-btn">
                        <MdModeEdit className="edit-icon"/>
                        <MdDeleteForever className="delete-icon"/>
                    </div>
                </li>
                <li className="list-item-wrapper" >
                    <div className="list-title-status">
                        <MdCheckCircle className="check-icon"/>
                        <p>list 1</p> 
                    </div> 
                    
                    <div className="edit-delete-btn">
                        <MdModeEdit className="edit-icon"/>
                        <MdDeleteForever className="delete-icon"/>
                    </div>
                </li>
                <li className="list-item-wrapper" >
                    <div className="list-title-status">
                        <MdCheckCircle className="check-icon"/>
                        <p>list 1</p> 
                    </div> 
                    
                    <div className="edit-delete-btn">
                        <MdModeEdit className="edit-icon"/>
                        <MdDeleteForever className="delete-icon"/>
                    </div>
                </li>
                <li className="list-item-wrapper" >
                    <div className="list-title-status">
                        <MdCheckCircle className="check-icon"/>
                        <p>list 1</p> 
                    </div> 
                    
                    <div className="edit-delete-btn">
                        <MdModeEdit className="edit-icon"/>
                        <MdDeleteForever className="delete-icon"/>
                    </div>
                </li>
            </ul>
        </div>
     );
}
 
export default TaskList;