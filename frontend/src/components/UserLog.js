import UserImages from "./UserImages.js";
import { useContext } from "react";
import { UserLogsContext } from "../context/userLogsContext";

const UserLog = (props) => {
  const {
    name,
    type,
    locations,
    dateStart,
    dateEnd,
    img,
    text,
    onLogDelete,
    id,
    getTravelDestination,
  } = props;
  const { edit, setEdit } = useContext(UserLogsContext);

  return (
    <>
      <li>
        {type} nach {locations[0]}
        <ul>
          <li>von: {name}</li>
          <li>Art der Reise: {type}</li>
          <li>Reiseziele: {locations}</li>
          <li>
            von: {dateStart} bis: {dateEnd}
          </li>
          <li>
            Bilder der Reise:
            <UserImages images={img} />
          </li>
          <li>Reisetagebuch: {text}</li>
        </ul>
        <button onClick={() => onLogDelete(id)}>Eintrag löschen</button>
        <button
          onClick={() => {
            setEdit(!edit);
            getTravelDestination(id);
          }}
        >
          Eintrag bearbeiten
        </button>
      </li>
      <br />
    </>
  );
};

export default UserLog;
