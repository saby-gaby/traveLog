import { createContext, useState } from "react";

const UserLogsContext = createContext();

const UserLogsProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [edit, setEdit] = useState(false);
  const [travelDest, setTravelDest] = useState();

  return (
    <UserLogsContext.Provider
      value={{ logs, setLogs, loaded, setLoaded, edit, setEdit, travelDest, setTravelDest }}
    >
      {children}
    </UserLogsContext.Provider>
  );
};

export { UserLogsContext, UserLogsProvider };

