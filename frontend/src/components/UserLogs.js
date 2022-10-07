import UserLog from "./UserLog.js";
import {useEffect, useContext} from "react";
import axios from "axios"; 
import { UserLogsContext } from "../context/userLogsContext.js";

const UserLogs = () => {
    const [logs, setLogs, loaded, setLoaded] = useContext(UserLogsContext);

    useEffect(() => {
        const getAllLogs = async () => {
            const resp = await axios.get("http://localhost:3001/userLogs");
            const data = await resp.data;
            setLogs(data);
            setLoaded(true);
        }
        getAllLogs()
        
    }, []);

    const onLogDelete = async (id) => {
        await axios.delete(`http://localhost:3001/userLogs/${id}`);

        const updatedLogs = logs.filter(UserLogObj => {
            if(UserLogObj._id === id) return false;
            return true; 
        });
        setLogs(updatedLogs);
    }

    return(<>
        <ul>
            {logs.map((UserLogObj, index) => {
                return (<UserLog name={UserLogObj.name} type={UserLogObj.type} locations={UserLogObj.locations} dateStart={UserLogObj.dateStart} dateEnd={UserLogObj.dateEnd} img={UserLogObj.img} text={UserLogObj.text} key={index} onLogDelete={onLogDelete} id={UserLogObj._id}/>)
            })}
        </ul>
    </>)
}

export default UserLogs;