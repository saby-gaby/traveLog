import { createContext, useState } from "react";

const UserLogsContext = createContext();

const UserLogsProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  return (
    <UserLogsContext.Provider value={[logs, setLogs, loaded, setLoaded]}>
      {children}
    </UserLogsContext.Provider>
  );
};

export { UserLogsContext, UserLogsProvider };
