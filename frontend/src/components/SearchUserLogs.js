import { useState, useContext } from "react";
import { UserLogsContext } from "../context/userLogsContext.js";
import axios from "axios";

const SearchUserLogs = () => {
    const [search, setSearch] = useState("");
    const [logs, setLogs, loaded, setLoaded] = useContext(UserLogsContext);
    
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = async () => {
        await axios.get(`http://localhost:3001/userLogs/${search}`)
    }

    return (<>
        <h2>Wo soll's denn hingehen?</h2>
        <input onChange={handleSearchChange} />
        
        <button onClick={handleSubmit}>Suche</button>
    </>)
}

export default SearchUserLogs;