const UserLog = (props) => {
    const { name, type, locations, dateStart, dateEnd, img, text, key, onLogDelete, id } = props;

    return (<>
        <li>
            {type} nach {locations[0]}
            <ul>
                <li>von: {name}</li>
                <li>Art der Reise: {type}</li>
                <li>Reiseziele: {locations}</li>
                <li>von: {dateStart} bis: {dateEnd}</li>
                <li>Bilder der Reise: {img}</li>
                <li>Reisetagebuch: {text}</li>
            </ul>
            <button onClick={() => onLogDelete(id)}>Eintrag löschen</button>
        </li> 
        <br/>
    </>)
}

export default UserLog; 