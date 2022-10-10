import UserLog from "./UserLog.js";
import { useEffect, useContext } from "react";
import axios from "axios";
import { UserLogsContext } from "../context/userLogsContext.js";

const UserLogs = () => {
  const { logs, setLogs, setLoaded, setTravelDest } =
    useContext(UserLogsContext);

  useEffect(() => {
    const getAllLogs = async () => {
      const resp = await axios.get("http://localhost:3001/userLogs");
      const data = await resp.data;
      setLogs(data);
      setLoaded(true);
    };
    getAllLogs();
  }, []);

  const onLogDelete = async (id) => {
    await axios.delete(`http://localhost:3001/userLogs/${id}`);

    const updatedLogs = logs.filter((UserLogObj) => {
      if (UserLogObj._id === id) return false;
      return true;
    });
    setLogs(updatedLogs);
  };

  const getTravelDestination = async (id) => {
    const res = await axios.get(`http://localhost:3001/userLogs/${id}`);
    const data = await res.data;
    setTravelDest(data);
  };

  return (
    <>
      <h3>Tagebucheinträge von anderen Nutzern:</h3>
      <>
        {[...logs].reverse().map((UserLogObj, index) => {
          return (
            <ul key={index}>
              <UserLog
                name={UserLogObj.name}
                type={UserLogObj.type}
                locations={UserLogObj.locations}
                dateStart={UserLogObj.dateStart}
                dateEnd={UserLogObj.dateEnd}
                img={UserLogObj.img}
                text={UserLogObj.text}
                onLogDelete={onLogDelete}
                id={UserLogObj._id}
                getTravelDestination={getTravelDestination}
              />
            </ul>
          );
        })}
      </>
    </>
  );
};

export default UserLogs;
