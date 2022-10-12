import { useContext, useState } from "react";
import axios from "axios";
import UserImages from "./UserImages.js";
import { UserLogsContext } from "../context/userLogsContext.js";

const SearchUserLogs = (props) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { setEdit, edit, setTravelDest } = useContext(UserLogsContext);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const getSearchResults = async () => {
    if (search.trim()) {
      const resp = await axios.get(
        `http://localhost:3001/userLogs/search/${search.trim()}`
      );
      const data = await resp.data;
      setSearchResults(data);
    }
  };

  let searchedLogs = searchResults.map((e, i) => {
    return (
      <li key={i}>
        <ul>
          <h3>
            {e.type} nach {e.locations[0]}
          </h3>
          <li>
            von: <span>{e.name}</span>
          </li>
          <li>
            Art der Reise: <span>{e.type}</span>
          </li>
          <li>Reiseziele: {e.locations.join(", ")}</li>
          <li>
            von: {e.dateStart} bis: {e.dateEnd}
          </li>
          <li>
            <div className="imgList">
              Bilder der Reise:
              <UserImages images={e.img} />
            </div>
          </li>
          <li>Reisetagebuch: {e.text}</li>
          <button
            onClick={() => {
              setEdit(!edit);
              setTravelDest(e);
            }}
          >
            Eintrag bearbeiten
          </button>
        </ul>
        <br />
      </li>
    );
  });

  return (
    <>
      <header>
        <h1>
          Trave<span id="l">l</span>
          <span id="og">og</span>
        </h1>
        <div id="search">
          <h2>Wo soll's denn hingehen?</h2>
          <input onChange={handleSearchChange} />
          <button onClick={getSearchResults}>Suche</button>
        </div>
      </header>
      <div >
        {searchResults.length !== 0 && (
          <>
            <h2>Suchergebnisse:</h2>
            <ul id="searchedLogs">{searchedLogs}</ul>
          </>
        )}
      </div>
    </>
  );
};

export default SearchUserLogs;
