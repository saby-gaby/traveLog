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
      <ul>
      <h3>
        {type} nach {locations.join(", ")}
      </h3>
        <li>von: <span>{name}</span></li>
        <li>Art der Reise: <span>{type}</span></li>
        <li>Reiseziele: {locations.join(", ")}</li>
        <li>
          von: <span>{dateStart}</span> bis: <span>{dateEnd}</span>
        </li>
        <li>
          <div className="imgList">
            Bilder der Reise:
            <UserImages images={img} />   //<img src="data:image/<%=image.img.contentType%>;base64,
                                          //<%=image.img.data.toString('base64')%>" alt={name}/>
          </div>
        </li>
        <li>Reisetagebuch: {text}</li>
      <div className="btns">
        <button onClick={() => onLogDelete(id)}>Eintrag löschen</button>
        <button
          onClick={() => {
            setEdit(!edit);
            getTravelDestination(id);
          }}
          >
          Eintrag bearbeiten
        </button>
      </div>
      </ul>
      <br />
    </>
  );
};

export default UserLog;
