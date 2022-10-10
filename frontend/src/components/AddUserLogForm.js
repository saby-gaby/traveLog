import { useState, useContext } from "react";
import { UserLogsContext } from "../context/userLogsContext.js";
import axios from "axios";

const AddUserLogForm = (props) => {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [locations, setLocations] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [img, setImg] = useState();
  const [text, setText] = useState();
  const { setLoaded, travelDest, setTravelDest } =
      useContext(UserLogsContext);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleLocationsChange = (event) => {
    setLocations(event.target.value);
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
        if (name === undefined) setName(travelDest.name)
        if (type === undefined) setType(travelDest.type)
        if (locations === undefined) setLocations(travelDest.locations)
        if (start === undefined) setStart(travelDest.dateStart)
        if (end === undefined) setEnd(travelDest.dateEnd)
        if (img === undefined) setImg(travelDest.img)
        if (text === undefined) setText(travelDest.text)
        
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
    }

    const handleReset = () => {
        setTravelDest()
    }

  return (
    <>
      <h2>neuer Reisetagebuch Eintrag: </h2>
      <li>
        Name:{" "}
        <input
          defaultValue={travelDest && travelDest.name}
                  onChange={handleNameChange}
        />
      </li>
      <li>
        Art der Reise:{" "}
        <input
          defaultValue={travelDest && travelDest.type}
          onChange={handleTypeChange}
        />
      </li>
      <li>
        Reiseziele:{" "}
        <input
          defaultValue={travelDest && travelDest.locations}
          onChange={handleLocationsChange}
        />
      </li>
      <li>
        Start:{" "}
        <input
          defaultValue={travelDest && travelDest.dateStart}
          onChange={handleStartChange}
        />{" "}
        Ende:{" "}
        <input
          defaultValue={travelDest && travelDest.dateEnd}
          onChange={handleEndChange}
        />
      </li>
      <li>
        Bilder: <input type="file" onChange={handleImgChange} />
      </li>
      <li>
        Reisetagebuch:{" "}
        <textarea
          defaultValue={travelDest ? travelDest.text:""}
          onChange={handleTextChange}
        />
      </li>

          <button onClick={handleSubmit}>Neu erstellen</button>
          {travelDest&&<button onClick={handleEdit}>Änderungen bestätigen</button>}
          {travelDest&&<button onClick={handleReset}>Reset</button>}
          
    </>
  );
};

export default AddUserLogForm;
