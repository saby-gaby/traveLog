import "./App.css";
import { UserLogsProvider } from "./context/userLogsContext.js";
import UserLogs from "./components/UserLogs.js";
import AddUserLogForm from "./components/AddUserLogForm.js";
import SearchUserLogs from "./components/SearchUserLogs.js";

function App() {
  return (
    <div className="App">
      <UserLogsProvider>
        <SearchUserLogs />
        <AddUserLogForm />
        <UserLogs />
      </UserLogsProvider>
    </div>
  );
}

export default App;
