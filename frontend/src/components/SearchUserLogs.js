import { useEffect, useState, useContext } from "react";


const SearchUserLogs = () => {
    const [search, setSearch] = useState("");
    
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }

    return (<>
        <h2>Wo soll's denn hingehen?</h2>
        <input onChange={handleSearchChange} />
        
        <button>Suche</button>
    </>)
}

export default SearchUserLogs;