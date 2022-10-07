import { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserImages from "./UserImages.js";

const SearchUserLogs = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const getSearchResults = async () => {
    const resp = await axios.get(
      `http://localhost:3001/userLogs/search/${search}`
    );
    const data = await resp.data;
    setSearchResults(data);
  };

  let searchedLogs = searchResults.map((e) => {
    return (
      <>
        <li>
          {e.type} nach {e.locations[0]}
          <ul>
            <li>von: {e.name}</li>
            <li>Art der Reise: {e.type}</li>
            <li>Reiseziele: {e.locations}</li>
            <li>
              von: {e.dateStart} bis: {e.dateEnd}
            </li>
            <li>
              Bilder der Reise:
              <UserImages images={e.img} />
            </li>
            <li>Reisetagebuch: {e.text}</li>
          </ul>
        </li>
        <br />
      </>
    );
  });

  return (
    <>
      <h2>Wo soll's denn hingehen?</h2>
      <input onChange={handleSearchChange} />
      <button onClick={getSearchResults}>Suche</button>
      <h2>Suchergebnisse:</h2>
      {searchedLogs}
    </>
  );
};

export default SearchUserLogs;
