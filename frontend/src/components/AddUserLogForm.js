import { useState, useContext } from "react";
import { UserLogsContext } from "../context/userLogsContext.js";
import axios from "axios";

const AddUserLogForm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [locations, setLocations] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [img, setImg] = useState("");
    const [text, setText] = useState("");
    const [logs, setLogs, loaded, setLoaded] = useContext(UserLogsContext);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleTypeChange = (event) => {
        setType(event.target.value);
    }

    const handleLocationsChange = (event) => {
        setLocations(event.target.value);
    }

    const handleStartChange = (event) => {
        setStart(event.target.value);
    }

    const handleEndChange = (event) => {
        setEnd(event.target.value);
    }

    const handleImgChange = (event) => {
        setImg(event.target.value);
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = async () => {
        await axios.post("http://localhost:3001/userLogs", { name: name, type: type, locations: locations, dateStart: start, dateEnd: end, img: img, text: text } );
        setLoaded(false);
        window.location.reload()
    }

    return (<>
        <h2>neuer Reisetagebuch Eintrag: </h2>
        <li>Name: <input onChange={handleNameChange} /></li>
        <li>Art der Reise: <input onChange={handleTypeChange} /></li>
        <li>Reiseziele: <input onChange={handleLocationsChange} /></li>
        <li>Start: <input onChange={handleStartChange} /> Ende: <input onChange={handleEndChange} /></li>
        <li>Bilder: <input type="file" onChange={handleImgChange} /></li>
        <li>Reisetagebuch: <textarea onChange={handleTextChange} /></li>

        <button onClick={handleSubmit}>eintragen</button>
    </>)
}

export default AddUserLogForm;