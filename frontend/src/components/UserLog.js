const UserLog = (props) => {
    const { name, type, locations, dateStart, dateEnd, img, text, key, onLogDelete, id } = props;

    return (<>
        <li>
            Name: {name}
            <li>Art der Reise: {type}</li>
            <li>Reiseziele; {locations}</li>
            <li>Start: {dateStart} Ende: {dateEnd}</li>
            <li>Bilder der Reise: {img}</li>
            <li>Reisetagebuch: {text}</li>
            <button onClick={() => onLogDelete(id)}>Eintrag löschen</button>
        </li>
    </>)
}

export default UserLog; 