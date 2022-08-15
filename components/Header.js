import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function Header({ title }) {
  return (
    <div className="header-container">
      <div className="header-title">{title}</div>
      <button className="add-activity-button">
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
    </div>
  );
}
