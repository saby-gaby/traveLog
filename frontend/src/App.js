import './App.css';
import { UserLogsProvider } from './context/userLogsContext.js';
import UserLogs from './components/UserLogs.js';
import AddUserLogForm from './components/addUserLogForm.js';

function App() {
  return (
    <div className="App">
      <UserLogsProvider>
        <UserLogs />
        <AddUserLogForm />
      </UserLogsProvider>
    </div>
  );
}

export default App;
