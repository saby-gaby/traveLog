import { useState, useContext } from "react";
import { UserLogsContext } from "../context/userLogsContext.js";
import axios from "axios";

const AddUserLogForm = (props) => {
  const { setLoaded, travelDest, setTravelDest, edit, setEdit } =
    useContext(UserLogsContext);
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [locations, setLocations] = useState();
  const [location, setLocation] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [img, setImg] = useState();
  const [text, setText] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleLocationsChange = () => {
    if (location) {
      if (location.includes(",")) {
        setLocations([...location.split(",")]);
      } else if (locations) {
        if (!locations.includes(location)) {
          setLocations([...locations, location]);
          setLocation();
        }
      } else {
        setLocations([location]);
        setLocation();
      }
    }
  };

  const handleStartChange = (event) => {
    setStart(event.target.value);
  };

  const handleEndChange = (event) => {
    setEnd(event.target.value);
  };

  const handleImgChange = (event) => {
    setImg(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:3001/userLogs", {
      name: name,
      type: type,
      locations: locations,
      dateStart: start,
      dateEnd: end,
      img: img,
      text: text,
    });
    setLoaded(false);
    window.location.reload();
  };

  const handleEdit = async () => {
    if (name === undefined) setName(travelDest.name);
    if (type === undefined) setType(travelDest.type);
    if (locations === undefined) setLocations([...travelDest.locations]);
    if (start === undefined) setStart(travelDest.dateStart);
    if (end === undefined) setEnd(travelDest.dateEnd);
    if (img === undefined) setImg(travelDest.img);
    if (text === undefined) setText(travelDest.text);

    await axios.patch(`http://localhost:3001/userLogs/${travelDest._id}`, {
      name: name,
      type: type,
      locations: locations,
      dateStart: start,
      dateEnd: end,
      img: img,
      text: text,
    });

    setLoaded(false);
    window.location.reload();
  };

  const handleReset = () => {
    setTravelDest();
    setEdit(false);
  };

  return (
    <div id="form">
      <h2>Neuer Reisetagebuch Eintrag: </h2>
      <ul>
        <li>
          Name:
          <input
            defaultValue={travelDest && travelDest.name}
            onChange={handleNameChange}
          />
        </li>
        <li>
          Art der Reise:
          <input
            defaultValue={travelDest && travelDest.type}
            onChange={handleTypeChange}
          />
        </li>
        <li>
          Reiseziele:
          <input
            defaultValue={travelDest && travelDest.locations}
            onChange={handleLocationChange}
          />
          <button id="addBtn" onClick={handleLocationsChange}>Add Ziele</button>
        </li>
        {locations && (
          <li>
            {locations.map((location, i) =><span key={i} className="location">{location}</span>
            )} <span id="added">hinzugefügt</span>
          </li>
        )}
        <li>
          Start:
          <input
            defaultValue={travelDest && travelDest.dateStart}
            onChange={handleStartChange}
          />
        </li>
        <li>
          Ende:
          <input
            defaultValue={travelDest && travelDest.dateEnd}
            onChange={handleEndChange}
          />
        </li>
        <li>
          Bilder: <input type="file" onChange={handleImgChange} />
        </li>
        <li>
          <div id="text">
            Reisetagebuch:
            <textarea
              defaultValue={travelDest ? travelDest.text : ""}
              onChange={handleTextChange}
            />
          </div>
        </li>
      </ul>
      <div className="btns">
          {!edit && <button onClick={handleSubmit}>Neu erstellen</button>}
          {travelDest && (
            <button onClick={handleEdit}>Änderungen bestätigen</button>
          )}
          {travelDest && <button onClick={handleReset}>Reset</button>}
      </div>
    </div>
  );
};

export default AddUserLogForm;
