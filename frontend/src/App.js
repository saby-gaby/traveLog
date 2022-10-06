import './App.css';
import { UserLogsProvider } from './context/userLogsContext.js';
import UserLogs from './components/UserLogs.js';

function App() {
  return (
    <div className="App">
      <UserLogsProvider>
        <UserLogs />

      </UserLogsProvider>
    </div>
  );
}

export default App;
